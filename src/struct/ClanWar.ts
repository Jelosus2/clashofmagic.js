import { APIClanWar } from "../types"
import { Teams } from "./Teams"
import * as moment from 'moment'

export class ClanWar {
    membersCount: number
    state: string
    teams: Teams[]
    warDuration: string
    preparationDuration: string
    attacksPerPlayer: number
    warStartTime: string
    warEndTime: string

    constructor(data: APIClanWar) {
        this.membersCount = data.membersCount
        this.state = data.state
        this.warDuration = data.warDuration
        this.preparationDuration = data.preparationDuration
        this.attacksPerPlayer = data.attacksPerPlayer
        this.warStartTime = data.warStartTime
        this.warEndTime = data.warEndTime
        this.teams = data.teams.map((data) => new Teams(data))
    }

    formatStartTime(input?: string) {
        if (!input) input = 'DD/MM/YYYY h:mm:ss'
        return moment.default(this.warStartTime).format(input)
    }

    formatEndTime(input?: string) {
        if (!input) input = 'DD/MM/YYYY h:mm:ss'
        return moment.default(this.warEndTime).format(input)
    }
}