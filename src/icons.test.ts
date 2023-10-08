import { describe, expect, it } from 'vitest';
import { icon } from './icon';

describe('Icon', () => {
  it('should return success icon', async () => {
    const res = await icon('mc.advancius.net:19132');

    expect(res).toBeDefined();
  });
});
