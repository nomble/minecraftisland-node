import type { BedrockStatusResponse, JavaStatusResponse, StatusRequest } from './types';
import { ServerType } from './types';
type ResponseType<T> = T extends {
    type: ServerType.JAVA;
} ? JavaStatusResponse : BedrockStatusResponse;
export declare function status<T extends StatusRequest>(req: T): Promise<ResponseType<T>>;
export {};
