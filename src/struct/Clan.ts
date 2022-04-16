import { APIClan } from "../types"
import { Info } from "./Info"
import { Members } from "./Members"
import { Client } from '../client/Client'

export class Clan {
    tag: string
    info: Info | null
    members: Members[]

    constructor(public client: Client, data: APIClan) {
        this.tag = data.tag
        this.info = data.info ? new Info(data.info) : null
        this.members = data.members.map((data) => new Members(data))
    }

    async war() {
        return this.client.getClanWar(this.tag)
    }
}