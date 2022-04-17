import { ClanMembers } from "../types"
import { Donations } from "./Donations"

export class Members {
    /* The tag of a clan member */
    tag: string
    /* The role of a clan member, can be Leader, CoLeader, Elder or Member */
    role: string
    /* The donations sent and received of a clan member */
    donation: Donations | null

    constructor(data: ClanMembers) {
        this.tag = data.tag
        this.role = data.role
        this.donation = data.donation ? new Donations(data.donation) : null
    }
}