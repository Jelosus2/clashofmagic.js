import { EventEmitter } from 'events'
import { RESTManager } from '../rest/RESTManager'
import { ClientError } from '../rest/ClientError'

import {
    Player,
    Clan,
    Token,
    ClanWar
}
from '../struct'

import {
    APIError,
    clanErrors,
    playerErrors,
    tokenErrors,
    warErrors
}
from '../rest/APIError'

type Server = 's1' | 's2'

export class Client extends EventEmitter {
    rest: RESTManager
    server: string

    constructor (server: Server) {
        super()

        if (server !== 's1' && server !== 's2') throw new ClientError('Select an invalid server!')

        this.rest = new RESTManager(server)
        this.server = server
    }

    async getPlayer(tag: string) {
        const data = await this.rest.player(tag)
        if (data.errorCode) throw new APIError(playerErrors, `/users/${tag}`, data.errorCode)

        return new Player(this, data)
    }

    async getClan(tag: string) {
        const data = await this.rest.clan(tag)
        if (data.errorCode) throw new APIError(clanErrors, `/clans/${tag}`, data.errorCode)

        return new Clan(this, data)
    }

    async verifyToken(tag: string, APIToken: string) {
        const data = await this.rest.token(tag, APIToken)
        if (data.errorCode) throw new APIError(tokenErrors, `/users/${tag}/${APIToken}`, data.errorCode)

        return new Token(data)
    }

    async getClanWar(tag: string) {
        const data = await this.rest.war(tag)
        if (data.errorCode) throw new APIError(warErrors, `clans/${tag}/currentwar`, data.errorCode)

        return new ClanWar(data)
    }
}