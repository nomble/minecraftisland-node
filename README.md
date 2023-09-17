# Minecraft Island - Minecraft Server Status

Minecraft Island (Minecraft Server Status API) NPM Package

# status

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

## Example

```ts
import { status } from 'mi-query';

const status = await status({
  type: 'java',
  address: 'minecraftisland.com',
  port: 25565,
});

console.log(status); // { type: 'java', version: '1.16.5', players: 0, maxPlayers: 100, motd: 'Minecraft Island', software: 'Paper', map: 'world', folder: 'world', game: 'MINECRAFT', appID: 0, bots: 0, secure: true, dedicated: true, os: 'linux', password: false }
```
