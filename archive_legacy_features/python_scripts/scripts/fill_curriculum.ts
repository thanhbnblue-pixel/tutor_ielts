import * as fs from 'fs';
import * as path from 'path';

// Load env
const envPath = path.resolve(process.cwd(), '.env');
const env = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = env.match(/GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : '';

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${API_KEY}`;

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateWithGemini(prompt: string, track: string, level: string, schema: string): Promise<any> {
    const payload = {
        contents: [{ parts: [{ text: prompt + "\n\nReturn EXACTLY this JSON schema:\n" + schema }] }],
        generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.7
        }
    };

    let retries = 10;
    while (retries > 0) {
        await sleep(4500); // Wait 4.5s to respect 15 RPM limit
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error.message);
            const text = data.candidates[0].content.parts[0].text;
            return JSON.parse(text);
        } catch (e: any) {
            console.error(`Error generating for ${track} ${level}: ${e.message}`);
            if (e.message.includes('Quota')) {
                console.log('Rate limit hit. Waiting 30s...');
                await sleep(30000);
            }
            retries--;
        }
    }
    return null;
}

async function fillStage(stageId: string, track: string, level: string, file: string) {
    console.log(`Processing ${stageId} from ${file}...`);
    const module = await import(`../src/lib/curriculum/${file.replace('.ts', '')}`);
    const stage = module[stageId];
    if (!stage) {
        console.error(`Could not find ${stageId} in ${file}`);
        return;
    }

    let modified = false;

    // Fill Units
    for (const unit of stage.units) {
        const topic = unit.topic || unit.title || 'General English';
        const grammarPoint = unit.grammar.point || unit.grammar.title || 'Basic Grammar';

        // 1. Fill Grammar Quiz
        if (!unit.grammar.quiz || unit.grammar.quiz.length < 5) {
            console.log(`Generating grammar quiz for ${stageId} - Unit: ${topic}...`);
            const prompt = `Generate 5 multiple choice grammar questions testing '${grammarPoint}' for English learners. Track: ${track}, Level: ${level}, Topic: ${topic}.`;
            const schema = `[{"id":1,"type":"grammar","question":"...___...","options":["A","B","C","D"],"correct_answer":0,"explanation_vi":"..."}]`;
            const questions = await generateWithGemini(prompt, track, level, schema);
            if (questions && questions.length > 0) {
                unit.grammar.quiz = questions.map((q: any, i: number) => ({ ...q, id: i + 1 }));
                modified = true;
            }
        }

        // 2. Fill Skills Practice (Reading & Listening)
        if (!unit.skills_practice.questions || unit.skills_practice.questions.length < 10) {
            console.log(`Generating Reading & Listening practice for ${stageId} - Unit: ${topic}...`);
            const prompt = `Generate 10 multiple choice questions (5 Reading, 5 Listening concepts) related to '${topic}' for English learners. Track: ${track}, Level: ${level}.`;
            const schema = `[{"id":1,"type":"reading","question":"...","options":["A","B","C","D"],"correct_answer":0,"explanation_vi":"..."}]`;
            const questions = await generateWithGemini(prompt, track, level, schema);
            if (questions && questions.length > 0) {
                unit.skills_practice.questions = questions.map((q: any, i: number) => ({ ...q, id: i + 1 }));
                modified = true;
            }
        }

        // 3. Fill Speaking & Writing
        if (!unit.skills_practice.speaking_prompt || !unit.skills_practice.writing_prompt) {
            console.log(`Generating Speaking & Writing for ${stageId} - Unit: ${topic}...`);
            const prompt = `Generate 1 short Speaking prompt and 1 short Writing prompt related to '${topic}'. Track: ${track}, Level: ${level}. Also provide a sample idea for speaking and a model sentence for writing.`;
            const schema = `{"speaking_prompt":"...","speaking_sample_idea":"...","writing_prompt":"...","writing_model_sentence":"..."}`;
            const sw = await generateWithGemini(prompt, track, level, schema);
            if (sw) {
                unit.skills_practice.speaking_prompt = sw.speaking_prompt;
                unit.skills_practice.speaking_sample_idea = sw.speaking_sample_idea;
                unit.skills_practice.writing_prompt = sw.writing_prompt;
                unit.skills_practice.writing_model_sentence = sw.writing_model_sentence;
                modified = true;
            }
        }
    }

    // Fill Checkpoint
    // 1. Checkpoint Questions (Reading & Listening & Grammar)
    if (!stage.checkpoint.questions || stage.checkpoint.questions.length < 30) {
        console.log(`Generating checkpoint questions for ${stageId}...`);
        const prompt = `Generate 30 multiple choice questions for a Checkpoint test. Track: ${track}, Level: ${level}. Include a mix of grammar, vocabulary, reading, and listening.`;
        const schema = `[{"id":1,"type":"checkpoint","question":"...","options":["A","B","C","D"],"correct_answer":0,"explanation_vi":"..."}]`;
        const questions = await generateWithGemini(prompt, track, level, schema);
        if (questions && questions.length > 0) {
            stage.checkpoint.questions = questions.map((q: any, i: number) => ({ ...q, id: i + 1 }));
            modified = true;
        }
    }
    
    // 2. Checkpoint Speaking & Writing
    if (!stage.checkpoint.speaking_prompt || !stage.checkpoint.writing_prompt) {
        console.log(`Generating Checkpoint Speaking & Writing for ${stageId}...`);
        const prompt = `Generate 1 major Speaking task and 1 major Writing task for a Checkpoint Exam. Track: ${track}, Level: ${level}. Include a sample idea and model sentence.`;
        const schema = `{"speaking_prompt":"...","speaking_sample_idea":"...","writing_prompt":"...","writing_model_sentence":"..."}`;
        const sw = await generateWithGemini(prompt, track, level, schema);
        if (sw) {
            stage.checkpoint.speaking_prompt = sw.speaking_prompt;
            stage.checkpoint.speaking_sample_idea = sw.speaking_sample_idea;
            stage.checkpoint.writing_prompt = sw.writing_prompt;
            stage.checkpoint.writing_model_sentence = sw.writing_model_sentence;
            modified = true;
        }
    }

    if (modified) {
        const text = `import { StageData } from './types';\n\nexport const ${stageId}: StageData = ${JSON.stringify(stage, null, 2)};\n`;
        fs.writeFileSync(path.resolve(process.cwd(), `src/lib/curriculum/${file}`), text, 'utf8');
        console.log(`Saved ${file}`);
    } else {
        console.log(`${file} was already full.`);
    }
}

async function main() {
    const tasks = [
        { id: 'stage1', track: 'IELTS', level: 'A1-A2', file: 'stage1.ts' },
        { id: 'stage2', track: 'IELTS', level: 'B1', file: 'stage2.ts' },
        { id: 'stage3', track: 'IELTS', level: 'B2', file: 'stage3.ts' },
        { id: 'stage4', track: 'IELTS', level: 'C1', file: 'stage4.ts' },
        { id: 'toeic_stage1', track: 'TOEIC', level: 'A1-A2', file: 'toeic_stage1.ts' },
        { id: 'toeic_stage2', track: 'TOEIC', level: 'B1-B2', file: 'toeic_stage2.ts' },
        { id: 'vstep_stage1', track: 'VSTEP', level: 'A1-A2', file: 'vstep_stage1.ts' },
        { id: 'vstep_stage2', track: 'VSTEP', level: 'B1-B2', file: 'vstep_stage2.ts' }
    ];

    for (const t of tasks) {
        await fillStage(t.id, t.track, t.level, t.file);
    }
}

main().catch(console.error);
