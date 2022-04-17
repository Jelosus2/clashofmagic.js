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

/* The servers you can select */
type Server = 's1' | 's2'

export class Client extends EventEmitter {
    /* The REST Manager for the client */
    rest: RESTManager
    /* The type of server to get the information */
    server: string

    constructor (server: Server) {
        super()

        /* If an invalid server is selected throw a Client Error */
        if (server !== 's1' && server !== 's2') throw new ClientError('You selected an invalid server!')

        this.rest = new RESTManager(server)
        this.server = server
    }

    /* Get the information about a player, adapt it to a structure and return it */
    async getPlayer(tag: string) {
        const data = await this.rest.player(tag)
        if (data.errorCode) throw new APIError(playerErrors, `/users/${tag}`, data.errorCode)

        return new Player(this, data)
    }

    /* Get the information about a clan, adapt it to a structure and return it */
    async getClan(tag: string) {
        const data = await this.rest.clan(tag)
        if (data.errorCode) throw new APIError(clanErrors, `/clans/${tag}`, data.errorCode)

        return new Clan(this, data)
    }

    /* Verify the API Token of a player, adapt it to a structure and return it */
    async verifyToken(tag: string, APIToken: string) {
        const data = await this.rest.token(tag, APIToken)
        if (data.errorCode) throw new APIError(tokenErrors, `/users/${tag}/${APIToken}`, data.errorCode)

        return new Token(data)
    }

    /* Get the information about the current war of a clan, adapt it to a structure and return it */
    async getClanWar(tag: string) {
        const data = await this.rest.war(tag)
        if (data.errorCode) throw new APIError(warErrors, `clans/${tag}/currentwar`, data.errorCode)

        return new ClanWar(data)
    }
}