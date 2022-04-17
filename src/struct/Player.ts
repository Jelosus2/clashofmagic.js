import { APIPlayer } from "../types"
import { Analytics } from "./Analytics"
import { Avatar } from "./Avatar"
import { Client } from '../client/Client'

export class Player {
    /* The tag of the player */
    tag: string
    /* The tag of the clan of the player, will return 'null' if the player don't have clan */
    clanTag: string
    /* The country code of the player region */
    region: string
    /* The analytics of the player such as the create time */
    analytics: Analytics | null
    /* The information about the player */
    avatar: Avatar | null

    constructor(public client: Client, data: APIPlayer) {
        this.tag = data.tag
        this.clanTag = data.clanTag
        this.region = data.region
        this.analytics = data.analytics ? new Analytics(data.analytics) : null
        this.avatar = data.avatar ? new Avatar(data.avatar) : null
    }

    /* Fetch the clan of the player, if the player don't have clan will return 'null' */
    async clan() {
        if (this.clanTag == null) return null
        return await this.client.getClan(this.clanTag)
    }

    /* Verify the API Token of the player */
    async verifyToken(APIToken: string) {
        return await this.client.verifyToken(this.tag, APIToken)
    }
}