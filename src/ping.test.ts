import { describe, expect, it } from 'vitest';
import { ping } from './ping';

describe('Ping', () => {
  it('should return ping', async () => {
    const res = await ping();

    expect(res).toEqual('online');
  });

  it('should return offline when server is offline', async () => {
    const res = await ping('https://offline.minecraftisland.com');

    expect(res).toEqual('offline');
  });
});
