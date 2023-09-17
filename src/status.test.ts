import { describe, expect, it } from 'vitest';
import { status } from './status';
import { ServerType } from './types';

describe('Status', () => {
  it('should return status', async () => {
    const res = await status({
      address: 'mc.hypixel.net',
      port: 25565,
      type: ServerType.JAVA,
    });

    expect(res).toEqual({
      online: true,
      motd: '§aHypixel Network §c[1.8-1.16]',
      players: {
        max: 85000,
        now: 103927,
      },
      version: 'Requires MC 1.8 / 1.16',
      ping: 0,
    });
  });
});
