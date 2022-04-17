import { PlayerLegendSeason } from "../types"

export class LegendSeason {
    /* The month of the legend season */
    month: number
    /* The year of the legend season */
    year: number
    /* The trophies the player got in the legend season */
    score: number
    /* The rank in the leaderboard the player was in the legend season */
    rank: number

    constructor(data: PlayerLegendSeason) {
        this.month = data.month
        this.year = data.year
        this.score = data.score
        this.rank = data.rank
    }
}