import { createHash } from 'node:crypto';

export function hashIp(ip: string): string {
  const salt = process.env.GOCCIA_IP_SALT ?? 'goccia-default-salt';
  return createHash('sha256').update(ip + salt).digest('hex').slice(0, 32);
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get('x-forwarded-for');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  const xri = headers.get('x-real-ip');
  if (xri && xri.trim()) return xri.trim();
  return '0.0.0.0';
}
