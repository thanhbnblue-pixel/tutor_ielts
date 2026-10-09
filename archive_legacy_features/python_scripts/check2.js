const fs = require('fs');

function checkFile(path) {
    let content = fs.readFileSync(path, 'utf8');
    let qCountMatches = content.match(/"id":\s*\d+,\s*"question":/g) || content.match(/id:\s*\d+,\s*question:/g);
    let skillsBlocks = content.match(/skills_practice\s*:\s*\{[\s\S]*?\}/g) || [];
    
    let totalQuestions = 0;
    let listeningCount = 0;
    let questionsPerUnit = [];
    
    for (let b of skillsBlocks) {
        if (b.toLowerCase().includes('"listening"') || b.toLowerCase().includes("'listening'")) {
            listeningCount++;
        }
        let qArrayMatch = b.match(/questions\s*:\s*\[([\s\S]*?)\]/);
        if (qArrayMatch) {
            let numQuestions = (qArrayMatch[1].match(/"id":|id:/g) || []).length;
            questionsPerUnit.push(numQuestions);
        }
    }
    console.log(path);
    console.log('  Listening units:', listeningCount);
    console.log('  Questions per skills_practice:', questionsPerUnit.join(', '));
}

checkFile('src/lib/curriculum/stage1.ts');
checkFile('src/lib/curriculum/stage2.ts');
checkFile('src/lib/curriculum/toeic_stage1.ts');

const stage1_raw = fs.readFileSync('src/lib/curriculum/stage1.ts', 'utf8');
const units = stage1_raw.split(/id:\s*['"]u\d+['"]/);
if (units.length > 8) {
    const u5 = units[5]; // since units[0] is everything before u1
    const u8 = units[8];
    const u5grammar = u5.match(/grammar:\s*\{[\s\S]*?point:\s*['"](.*?)['"]/);
    const u8grammar = u8.match(/grammar:\s*\{[\s\S]*?point:\s*['"](.*?)['"]/);
    console.log('Stage 1 - Unit 5 Grammar:', u5grammar ? u5grammar[1] : 'not found');
    console.log('Stage 1 - Unit 8 Grammar:', u8grammar ? u8grammar[1] : 'not found');
}

const speaking = fs.readFileSync('src/components/SpeakingExaminer.tsx', 'utf8');
const speakingCount = (speaking.match(/id:\s*['"]sp-.*['"]/g) || speaking.match(/id:\s*['"].*['"],\s*topic:/g) || []).length;
console.log('Speaking Topics Count:', speakingCount);

const writing = fs.readFileSync('src/components/WritingEditor.tsx', 'utf8');
const writingCount = (writing.match(/id:\s*['"]t.*['"]/g) || writing.match(/id:\s*['"].*['"],\s*title:/g) || []).length;
console.log('Writing Prompts Count:', writingCount);
