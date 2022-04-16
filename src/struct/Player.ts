import { APIPlayer } from "../types"
import { Analytics } from "./Analytics"
import { Avatar } from "./Avatar"
import { Client } from '../client/Client'

export class Player {
    tag: string
    clanTag: string
    region: string
    analytics: Analytics | null
    avatar: Avatar | null

    constructor(public client: Client, data: APIPlayer) {
        this.tag = data.tag
        this.clanTag = data.clanTag
        this.region = data.region
        this.analytics = data.analytics ? new Analytics(data.analytics) : null
        this.avatar = data.avatar ? new Avatar(data.avatar) : null
    }

    async clan() {
        if (this.clanTag == null) return null
        return await this.client.getClan(this.clanTag)
    }

    async verifyToken(APIToken: string) {
        return await this.client.verifyToken(this.tag, APIToken)
    }

    async fetchClanWar() {
        if (this.clanTag == null) return null
        return await this.client.getClanWar(this.clanTag)
    }
}