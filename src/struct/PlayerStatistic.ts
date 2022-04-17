import { PlayerStatistics } from "../types"

export class PlayerStatistic {
    /* The attack wins of the player in the main village */
    mainAttackWins: number
    /* The attack losses of the player in the main village */
    mainAttackLosses: number
    /* The defense wins of the player in the main village */
    mainDefenseWins: number
    /* The defense losses of the player in the main village */
    mainDefenseLosses: number
    /* The attack wins of the player in the builder village */
    builderWins: number
    /* The attack draws of the player in the builder village */
    builderDraws: number
    /* The attack losses of the player in the builder village */
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