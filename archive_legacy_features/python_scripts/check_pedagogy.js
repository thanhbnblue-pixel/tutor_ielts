const fs = require('fs');

// Check stage1.ts
let stage1 = fs.readFileSync('src/lib/curriculum/stage1.ts', 'utf8');
stage1 = stage1.substring(stage1.indexOf('export const stage1'));
// Replace export const ... = with just the object
stage1 = stage1.replace(/export const stage1: StageData = /, '').trim();
if (stage1.endsWith(';')) stage1 = stage1.slice(0, -1);

// We cannot easily JSON.parse a TS file, so we'll do regex counting.

function checkStage(file) {
    if(!fs.existsSync(file)) return file + ' not found';
    const c = fs.readFileSync(file, 'utf8');
    const units = [...c.matchAll(/skills_practice:\s*\{([^}]*)\}/g)];
    let listeningCount = 0;
    let questionsCount = [];
    
    for (let u of units) {
        if (u[1].toLowerCase().includes('"type": "listening"')) listeningCount++;
        else if (u[1].toLowerCase().includes('type: "listening"')) listeningCount++;
        else if (u[1].toLowerCase().includes("'type': 'listening'")) listeningCount++;
        else if (u[1].toLowerCase().includes("type: 'listening'")) listeningCount++;
        
        // Find questions array
        let qMatch = u[0].match(/questions:\s*\[([\s\S]*?)\]/);
        if (qMatch) {
            // Count number of id: inside questions array
            let qCount = (qMatch[1].match(/id:/g) || []).length;
            questionsCount.push(qCount);
        } else {
            questionsCount.push(0);
        }
    }
    return { file, totalUnits: units.length, listeningCount, questionsCount };
}

console.log(checkStage('src/lib/curriculum/stage1.ts'));
console.log(checkStage('src/lib/curriculum/stage2.ts'));
console.log(checkStage('src/lib/curriculum/toeic_stage1.ts'));

// Check Grammar swap in stage1.ts
const stage1_raw = fs.readFileSync('src/lib/curriculum/stage1.ts', 'utf8');
let u5 = stage1_raw.match(/id:\s*['"]u5['"][\s\S]*?grammar:\s*\{[\s\S]*?point:\s*['"](.*?)['"]/);
let u8 = stage1_raw.match(/id:\s*['"]u8['"][\s\S]*?grammar:\s*\{[\s\S]*?point:\s*['"](.*?)['"]/);
console.log('Stage 1 - Unit 5 Grammar:', u5 ? u5[1] : 'not found');
console.log('Stage 1 - Unit 8 Grammar:', u8 ? u8[1] : 'not found');

// Check SpeakingExaminer.tsx
const speaking = fs.readFileSync('src/components/SpeakingExaminer.tsx', 'utf8');
const speakingCount = (speaking.match(/id:\s*['"]sp-.*['"]/g) || speaking.match(/id:\s*['"].*['"],\s*topic:/g) || []).length;
console.log('Speaking Topics Count:', speakingCount);

// Check WritingEditor.tsx
const writing = fs.readFileSync('src/components/WritingEditor.tsx', 'utf8');
const writingCount = (writing.match(/id:\s*['"]t.*['"]/g) || writing.match(/id:\s*['"].*['"],\s*title:/g) || []).length;
console.log('Writing Prompts Count:', writingCount);

