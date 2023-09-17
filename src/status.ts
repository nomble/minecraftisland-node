import { MIUrl, MIPath } from './constant';
import { StatusRequest, Server } from './types';
import { z } from 'zod';

export const status = async (req: StatusRequest) => {
  const StatusRequestSchema = z.object({
    type: z
      .string()
      .nonempty()
      .refine((v) => {
        return Object.values(Server).includes(v as Server);
      }, 'Invalid server type'),
    address: z.union([z.string().nonempty(), z.string().url(), z.string().ip()]),
    port: z
      .number()
      .int()
      .positive()
      .min(1)
      .max(65535)
      .nonnegative()
      .transform((v) => String(v)),
  });
  const StatusRequest = StatusRequestSchema.parse(req);
  const query = new URLSearchParams(StatusRequest);
  const res = await fetch(`${MIUrl.BASE}${MIPath.Status}?${query.toString()}`);
  const json = await res.json();
  return json;
};
