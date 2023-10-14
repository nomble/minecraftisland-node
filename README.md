# Minecraft Island - Minecraft Server Status

Minecraft Island (Minecraft Server Status API) NPM Package

## :star: Show Your Support!

If you found this project helpful or you learned something from the source code and want to thank me, consider giving a :star: [on GitHub](https://github.com/nomble/minecraftisland-node)!

Your support motivates me to keep going, innovate, and create better open-source projects! :heart:

## Table of Contents

- [Status](#status)
- [Ping](#ping)
- [Icon](#icon)

## Installation

```bash
npm install @nomble/minecraftisland
```

# Status

## Description

Get the status of a server

## Parameters

- **type** - The type of server to check
- **address** - The address of the server to check
- **port** - The port of the server to check

## Returns

- **type** - The type of server
- **version** - The version of the server
- **players** - The amount of players online
- **maxPlayers** - The max amount of players
- **motd** - The MOTD of the server
- **software** - The software of the server
- **map** - The map of the server
- **folder** - The folder of the server
- **game** - The game of the server
- **appID** - The appID of the server
- **bots** - The amount of bots online
- **secure** - If the server is secure
- **dedicated** - If the server is dedicated
- **os** - The operating system of the server
- **password** - If the server has a password

## Status Example

```ts
import MinecraftIsland from '@nomble/minecraftisland';

const res = await MinecraftIsland.status({
  address: 'hub.opblocks.com',
  port: 25565,
  type: ServerType.JAVA, // Optional, defaults to JAVA if not provided, can be JAVA or BEDROCK (ServerType.JAVA or ServerType.BEDROCK)
});

console.log(status); // { type: 'java', version: '1.16.5', players: 0, maxPlayers: 100, motd: 'Minecraft Island', software: 'Paper', map: 'world', folder: 'world', game: 'MINECRAFT', appID: 0, bots: 0, secure: true, dedicated: true, os: 'linux', password: false }
```

# Ping

## Description

Ping a server to see if it is online or offline

## Parameters

None

## Returns

String - 'online' or 'offline'

## Ping Example

```ts
import MinecraftIsland from '@nomble/minecraftisland';

const res = await MinecraftIsland.ping();

console.log(res); // 'online' or 'offline'
```

# Icon

## Description

Get the icon of a server

## Parameters

Address - The address of the server to get the icon from

## Returns

Blob - The icon of the server

# Icon Example

```ts
import MinecraftIsland from '@nomble/minecraftisland';

const res = await MinecraftIsland.icon('mc.advancius.net:19132');

console.log(res); // returns Blob
```
