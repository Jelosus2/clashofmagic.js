import { APIClanWar } from "../types"
import { Teams } from "./Teams"
import { Time } from "./Time"

export class ClanWar {
    /* The number of members in the war for both clans */
    membersCount: number
    /* The state of the war */
    state: string
    /* The information about each clan in the war */
    teams: Teams[]
    /* The duration of the war day */
    warDuration: string
    /* The duration of the war preparation */
    preparationDuration: string
    /* The number of attacks each player have */
    attacksPerPlayer: number
    /* The date when the war will start */
    warStartTime: Time | null
    /* The date when the war will end */
    warEndTime: Time | null 

    constructor(data: APIClanWar) {
        this.membersCount = data.membersCount
        this.state = data.state
        this.warDuration = data.warDuration
        this.preparationDuration = data.preparationDuration
        this.attacksPerPlayer = data.attacksPerPlayer
        this.warStartTime = data.warStartTime ? new Time (data.warStartTime) : null
        this.warEndTime = data.warEndTime ? new Time(data.warEndTime) : null
        this.teams = data.teams.map((data) => new Teams(data))
    }
}