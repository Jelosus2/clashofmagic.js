import { PlayerStatistics } from "../types"

export class PlayerStatistic {
    mainAttackWins: number
    mainAttackLosses: number
    mainDefenseWins: number
    mainDefenseLosses: number
    builderWins: number
    builderDraws: number
    builderLosses: number

    constructor(data: PlayerStatistics) {
        this.mainAttackWins = data.mainAttackWins
        this.mainAttackLosses = data.mainAttackLosses
        this.mainDefenseLosses = data.mainDefenseLosses
        this.mainDefenseWins = data.mainDefenseWins
        this.builderDraws = data.builderDraws
        this.builderLosses = data.builderLosses
        this.builderWins = data.builderWins
    }
}