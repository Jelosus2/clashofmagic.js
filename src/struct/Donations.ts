import { ClanDonations } from "../types"

export class Donations {
    /* The number of donations the player sent */
    sent: number
    /* The number of donations the player received */
    received: number

    constructor(data: ClanDonations) {
        this.sent = data.sent
        this.received = data.received
    }
}