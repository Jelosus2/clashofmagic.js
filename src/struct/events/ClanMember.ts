import { ClanMembersEvent } from "../../types"
import { Client } from "../../client/Client"

export class ClanMember {
    /* The tag of the clan member */
    tag: ClanMembersEvent | null

    constructor(public client: Client, data: ClanMembersEvent) {
        this.tag = data ? data : null
    }

    /* We get all the information about that player */
    async fetch() {
        if (this.tag == null) return null
        if (typeof this.tag == 'string')
        return await this.client.getPlayer(this.tag)
    }
}