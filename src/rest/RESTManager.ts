import { RequestHandler } from './RequestHandler'
import { ClientError } from './ClientError'

/* Represents the REST Manager */
export class RESTManager {
    /* The Request Handler for the REST Manager */
    readonly handler: RequestHandler

    constructor(server: string) {
        this.handler = new RequestHandler(server)
    }

    /* Request the player information and check the parse and API errors */
    player(tag: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the player tag!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`users/${tag}`)
    }

    /* Request the clan information and check the parse and API errors */
    clan(tag: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the clan tag!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`clans/${tag}`)
    }

    /* Verify the token and check the parse and API errors */
    token(tag: string, APIToken: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the player tag!')
        if (!APIToken) throw new ClientError('You must input the API Token!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`users/${tag}/${APIToken}`)
    }

    /* Request the clan war information and check the parse and API errors */
    war(tag: string) {
        if (!tag.startsWith('#')) throw new ClientError('Error while parsing the clan tag!')
        tag = tag.replace('#', '%23')

        return this.handler.request(`clans/${tag}/currentwar`)
    }
}