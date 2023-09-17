import fetch from 'node-fetch';
import { MIUrl, MIPath } from './constant';
import { PingResponse } from './types';

export const ping = async (): Promise<PingResponse> => {
  const res = await fetch(`${MIUrl.BASE}${MIPath.Ping}`);
  if (!res.ok) return 'offline';
  return 'online';
};
