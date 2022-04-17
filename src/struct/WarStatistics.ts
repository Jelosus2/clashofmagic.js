import { ClanWarStatistics } from "../types"

export class WarStatistics {
    /* The total wars the clan did */
    totalWars: number
    /* The wins the clan have */
    wins: number
    /* The draws the clan have */
    draws: number
    /* The losses the clan have */
    losses: number
    /* The consecutive wins the clan have */
    consecutiveWins: number

    constructor(data: ClanWarStatistics) {
        this.totalWars = data.totalWars
        this.wins = data.wins
        this.draws = data.draws
        this.losses = data.losses
        this.consecutiveWins = data.consecutiveWins
    }
}