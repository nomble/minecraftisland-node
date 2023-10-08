import { MIUrl, MIPath } from './constant';
import type { PingResponse } from './types';

export const ping = async (url?: string): Promise<PingResponse> => {
  return fetch(url ?? `${MIUrl.BASE}${MIPath.Ping}`)
    .then((res) => {
      return res.ok ? 'online' : 'offline';
    })
    .catch(() => 'offline');
};
