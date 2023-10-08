import { z } from 'zod';
import { MIUrl, MIPath } from './constant';

export const icon = async (address: string) => {
  const IconRequest = IconRequestSchema.parse({ address });
  const query = new URLSearchParams(IconRequest);
  const res = await fetch(`${MIUrl.BASE}${MIPath.Icon}?${query.toString()}`);
  const icon = await res.blob();
  return icon;
};

const IconRequestSchema = z.object({
  address: z.union([z.string().nonempty(), z.string().url(), z.string().ip()]),
});
