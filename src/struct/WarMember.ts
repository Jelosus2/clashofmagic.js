import { WarMembers } from "../types"
import { State } from "./State"

export class WarMember {
    /* The tag of a clan war member */
    tag: string
     /* The name of a clan war member */
    name: string
     /* The Townhall level of a clan war member */
    townHallLevel: number
     /* The map position of a clan war member */
    mapPosition: number
     /* The attack count of a clan war member */
    attackCount: number
     /* The defense count of a clan war member */
    defenseCount: number
     /* The stars and destruction percentage an opponent did to a clan war member */
    state: State | null

    constructor(data: WarMembers) {
        this.tag = data.tag
        this.name = data.name
        this.townHallLevel = data.townHallLevel
        this.mapPosition = data.mapPosition
        this.attackCount = data.attackCount
        this.defenseCount = data.defenseCount
        this.state = data.state ? new State(data.state) : null
    }
}