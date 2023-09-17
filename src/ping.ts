import { MIUrl, MIPath } from './constant';
import type { PingResponse } from './types';

export const ping = async (): Promise<PingResponse> => {
  const res = await fetch(`${MIUrl.BASE}${MIPath.Ping}`);
  if (!res.ok) return 'offline';
  return 'online';
};
