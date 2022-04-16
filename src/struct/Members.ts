import { ClanMembers } from "../types"
import { Donations } from "./Donations"

export class Members {
    tag: string
    role: string
    donation: Donations | null

    constructor(data: ClanMembers) {
        this.tag = data.tag
        this.role = data.role
        this.donation = data.donation ? new Donations(data.donation) : null
    }
}