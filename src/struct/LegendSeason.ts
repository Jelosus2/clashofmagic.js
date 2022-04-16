import { PlayerLegendSeason } from "../types"

export class LegendSeason {
    month: number
    year: number
    score: number
    rank: number

    constructor(data: PlayerLegendSeason) {
        this.month = data.month
        this.year = data.year
        this.score = data.score
        this.rank = data.rank
    }
}