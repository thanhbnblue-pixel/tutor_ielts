export class RateLimiter {
  private timestamps: Map<string, number[]> = new Map();
  private readonly windowMs: number;
  private readonly maxRequests: number;

  constructor(windowMs: number, maxRequests: number) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  isRateLimited(ip: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Lấy các request trong cửa sổ thời gian
    let requests = this.timestamps.get(ip) || [];
    requests = requests.filter(time => time > windowStart);

    if (requests.length >= this.maxRequests) {
      return true;
    }

    requests.push(now);
    this.timestamps.set(ip, requests);
    return false;
  }
}

// Global instances cho các routes AI (chống spam)
// Giới hạn: 10 requests / 1 phút mỗi IP
export const globalAiRateLimiter = new RateLimiter(60 * 1000, 10);

export function getClientIp(req: Request): string {
  // Lấy IP từ headers (nếu app deploy qua proxy/Vercel)
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return 'anonymous';
}
