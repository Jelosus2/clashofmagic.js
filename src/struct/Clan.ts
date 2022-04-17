import { APIClan } from "../types"
import { Info } from "./Info"
import { Members } from "./Members"
import { Client } from '../client/Client'

export class Clan {
    /* The tag of the clan */
    tag: string
    /* The info of the clan */
    info: Info | null
    /* An array of the members of the clan */
    members: Members[]

    constructor(public client: Client, data: APIClan) {
        this.tag = data.tag
        this.info = data.info ? new Info(data.info) : null
        this.members = data.members.map((data) => new Members(data))
    }

    /* Fetch the current war information of that clan */
    async war() {
        return await this.client.getClanWar(this.tag)
    }
}