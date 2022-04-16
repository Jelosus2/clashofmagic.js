import { RequestHandler } from './RequestHandler'
import { ClientError } from './ClientError'

export class RESTManager {
    readonly handler: RequestHandler

    constructor(server: string) {
        this.handler = new RequestHandler(server)
    }

    player(tag: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the player tag!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`users/${tag}`)
    }

    clan(tag: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the clan tag!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`clans/${tag}`)
    }

    token(tag: string, APIToken: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the player tag!')
        if (!APIToken) throw new ClientError('You must input the API Token!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`users/${tag}/${APIToken}`)
    }

    war(tag: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the clan tag!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`clans/${tag}/currentwar`)
    }
}