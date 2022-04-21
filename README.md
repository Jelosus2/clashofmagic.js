# ClashofMagic.JS
clashofmagic.js it's a wrapper for the Clash of Magic API made in TypeScript and will simplify the tasks to get data from the API 

**Note: It's required v14 of node or a newer version**

# Setup
```js
const { Client } = require('clashofmagic.js')
const client = new Client('SERVER')

/**
 * Available options for SERVER:
 * - s1
 * - s2
 */
```

# Request Player Information
```js
async function player(tag) {
	const player = await client.getPlayer(tag)

	console.log(player)
}

player('#2PP')

// This will return all the information of the player
```
### Methods
- **.clan()**  - Returns information about player's clan if the player is in a clan
	- **.war()** - Returns information about player's clan war if the player is in a clan
- **.verifyToken(APIToken: string)** - Verifies the API Token of the player

# Request Clan Information
```js
async function clan(tag) {
	const clan = await client.getClan(tag)

	console.log(clan)
}

clan('#2PP')

// This will return all the information of the clan
```

### Methods
- **.war()** - Returns information about the clan war if the clan started one

# Get Clan War Information
```js
async function clanWar(tag) {
	const clanWar = await client.getClanWar(tag)

	console.log(clanWar)
}

clanWar('#2PP')

// This will return all the information of the clan war if the clan started one
```

# Verify a player's API Token
```js
async function verifyToken(tag, APIToken) {
	const verifyToken = await client.verifyToken(tag, APIToken)

	console.log(verifyToken)
}

verifyToken('#2PP', 'API-TOKEN-HERE')

/* If the token is valid will send this output in console:
{ status: "valid" }
*/
```

# Disclaimer
> This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell's Fan Content Policy](https://supercell.com/en/fan-content-policy/).

## LICENSE
ISC License

Copyright (c) 2022 Jelosus1

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
