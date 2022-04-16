import { ClanWarStatistics } from "../types"

export class WarStatistics {
    totalWars: number
    wins: number
    draws: number
    losses: number
    consecutiveWins: number

    constructor(data: ClanWarStatistics) {
        this.totalWars = data.totalWars
        this.wins = data.wins
        this.draws = data.draws
        this.losses = data.losses
        this.consecutiveWins = data.consecutiveWins
    }
}