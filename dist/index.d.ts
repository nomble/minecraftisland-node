import { status } from './status';
declare const MinecraftIsland: {
    status: typeof status;
    icon: (address: string) => Promise<Blob>;
    ping: (url?: string | undefined) => Promise<import("./types").PingResponse>;
};
export default MinecraftIsland;
