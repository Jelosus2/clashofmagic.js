import { WarMembers } from "../types"
import { State } from "./State"

export class WarMember {
    tag: string
    name: string
    townHallLevel: number
    mapPosition: number
    attackCount: number
    defenseCount: number
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