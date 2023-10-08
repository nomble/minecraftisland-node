import { MIUrl, MIPath } from './constant';
import type {
  BedrockStatusResponse,
  JavaStatusResponse,
  StatusRequest,
} from './types';
import { ServerType } from './types';
import { z } from 'zod';

type ResponseType<T> = T extends { type: ServerType.JAVA }
  ? JavaStatusResponse
  : BedrockStatusResponse;

export async function status<T extends StatusRequest>(
  req: T,
): Promise<ResponseType<T>> {
  const StatusRequest = StatusRequestSchema.parse(req);
  const query = new URLSearchParams(StatusRequest);
  const res = await fetch(`${MIUrl.BASE}${MIPath.Status}?${query.toString()}`);

  if (res.ok) {
    const json = await res.json();
    if (StatusRequest.type === ServerType.JAVA) {
      return json?.data as JavaStatusResponse;
    } else {
      return json?.data as BedrockStatusResponse;
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
}

const StatusRequestSchema = z.object({
  type: z
    .string()
    .nonempty()
    .refine((v) => {
      return Object.values(ServerType).includes(v as ServerType);
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
