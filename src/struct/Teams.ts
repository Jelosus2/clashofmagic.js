import { WarTeams } from "../types"
import { Alliance } from "./Alliance"
import { WarMember } from "./WarMember"

export class Teams {
    /* Total destruction percentage done by the clan */
    totalDestruction: number
    /* Total stars the clan got */
    totalStars: number
    /* Information about the clan */
    alliance: Alliance | null
    /* An array with information about the clan members who participate in war */
    members: WarMember[]

    constructor(data: WarTeams) {
        this.totalDestruction = data.totalDestruction
        this.totalStars = data.totalStars
        this.alliance = data.alliance ? new Alliance(data.alliance) : null
        this.members = data.members.map((data) => new WarMember(data))
    }
}