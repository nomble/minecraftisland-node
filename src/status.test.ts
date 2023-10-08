import { describe, expect, it } from 'vitest';
import { status } from './status';
import { ServerType } from './types';

describe('Status', () => {
  it('should return success java status', async () => {
    const res = await status({
      address: 'hub.opblocks.com',
      port: 25565,
      type: ServerType.JAVA,
    });

    expect(res.online).toBe(true);
    expect(res.host).toBe('hub.opblocks.com');
    expect(res.port).toBe(25565);
    expect(res.eula_blocked).toBe(false);
    expect(res.retrieved_at).toBeGreaterThan(0);
    expect(res.expires_at).toBeGreaterThan(0);
    expect(res?.extra?.icon).toBeDefined();
    expect(res?.extra?.version).toBeDefined();
  });

  it('should return success bedrock status', async () => {
    const res = await status({
      address: 'mc.advancius.net',
      port: 19132,
      type: ServerType.BEDROCK,
    });

    expect(res.online).toBe(true);
    expect(res.host).toBe('mc.advancius.net');
    expect(res.port).toBe(19132);
    expect(res.eula_blocked).toBe(false);
    expect(res.retrieved_at).toBeGreaterThan(0);
    expect(res.expires_at).toBeGreaterThan(0);
    expect(res?.extra?.version).toBeDefined();
  });

  it("should throw error when server doesn't exist", async () => {
    await expect(
      status({
        address: 'mc.advancius.net',
        port: 19133,
        type: ServerType.BEDROCK,
      }),
    ).rejects.toThrow();
  });
});
