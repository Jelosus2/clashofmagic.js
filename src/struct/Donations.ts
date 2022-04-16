import { ClanDonations } from "../types"

export class Donations {
    sent: number
    received: number

    constructor(data: ClanDonations) {
        this.sent = data.sent
        this.received = data.received
    }
}