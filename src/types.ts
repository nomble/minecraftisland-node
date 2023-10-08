export enum ServerType {
  JAVA = 'java',
  BEDROCK = 'bedrock',
}

export type StatusRequest = {
  type: ServerType;
  address: string;
  port?: number;
};

export type IconRequest = {
  address: string;
};

export type BaseResponse<T> = {
  status: 'success' | 'error';
  timestamp: number;
  data: T;
};

export type PingResponse = 'online' | 'offline';

export type JavaStatusOptions = {
  query: boolean;
};

export type BaseStatusResponse = {
  online: boolean;
  host: string;
  port: number;
  eula_blocked: boolean;
  retrieved_at: number;
  expires_at: number;
};

export type JavaStatusPureResponse = {
  version?: {
    name_raw: string;
    name_clean: string;
    name_html: string;
    protocol: number;
  } | null;
  players?: {
    online: number;
    max: number;
    list: {
      uuid: string;
      name_raw: string;
      name_clean: string;
      name_html: string;
    }[];
  };
  motd?: {
    raw: string;
    clean: string;
    html: string;
  };
  icon?: string | null;
  mods?: {
    name: string;
    version: string;
  }[];
  plugins?: {
    name: string;
    version: string;
  }[];
  software?: string;
};

export type JavaStatusResponse = BaseStatusResponse & {
  extra?: JavaStatusPureResponse;
};

export type BedrockStatusPureResponse = {
  version?: {
    name: string;
    protocol: number;
  };
  players?: {
    online: number;
    max: number;
  };
  motd?: {
    raw: string;
    clean: string;
    html: string;
  };
  gamemode?: string;
  server_id?: string;
  edition?: 'MCPE' | 'MCEE';
};

export type BedrockStatusResponse = BaseStatusResponse & {
  extra?: BedrockStatusPureResponse;
};
