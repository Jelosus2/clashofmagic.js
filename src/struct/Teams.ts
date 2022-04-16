import { WarTeams } from "../types"
import { Alliance } from "./Alliance"
import { WarMember } from "./WarMember"

export class Teams {
    totalDestruction: number
    totalStars: number
    alliance: Alliance | null
    members: WarMember[]

    constructor(data: WarTeams) {
        this.totalDestruction = data.totalDestruction
        this.totalStars = data.totalStars
        this.alliance = data.alliance ? new Alliance(data.alliance) : null
        this.members = data.members.map((data) => new WarMember(data))
    }
}