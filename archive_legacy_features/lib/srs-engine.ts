// SM-2 Spaced Repetition Algorithm

export interface SRSItem {
  id: string; // word or question id
  interval: number; // days until next review
  repetition: number; // consecutive correct answers
  efactor: number; // easiness factor (>= 1.3)
  next_review_date: string; // ISO 8601
  status: 'new' | 'learning' | 'review' | 'mastered';
}

export function calculateNextReview(item: SRSItem, quality: number): SRSItem {
  // Quality:
  // 0 - Complete blackout (Quên hoàn toàn)
  // 3 - Hard (Khó, nhưng nhớ được)
  // 4 - Good (Ổn, nhớ được dễ dàng)
  // 5 - Easy (Quá dễ)
  
  let { interval, repetition, efactor } = item;

  if (quality >= 3) {
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * efactor);
    }
    repetition += 1;
  } else {
    repetition = 0;
    interval = 1;
  }

  efactor = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (efactor < 1.3) efactor = 1.3;

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return {
    ...item,
    interval,
    repetition,
    efactor,
    next_review_date: nextDate.toISOString(),
    status: repetition > 5 ? 'mastered' : 'review'
  };
}

export function getDueItems(items: SRSItem[]): SRSItem[] {
  const now = new Date();
  return items.filter(item => new Date(item.next_review_date) <= now);
}
