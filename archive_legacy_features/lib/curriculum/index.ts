import { StageData } from './types';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
import { stage3 } from './stage3';
import { stage4 } from './stage4';
import { toeic_stage1 } from './toeic_stage1';
import { toeic_stage2 } from './toeic_stage2';
import { vstep_stage1 } from './vstep_stage1';
import { vstep_stage2 } from './vstep_stage2';

export * from './types';
export const STAGES: StageData[] = [
  stage1, stage2, stage3, stage4,
  toeic_stage1, toeic_stage2,
  vstep_stage1, vstep_stage2
];
