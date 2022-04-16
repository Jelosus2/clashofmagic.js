import { PlayerLegendLeague, PlayerLegendSeason } from '../types'
import { LegendSeason } from './LegendSeason'

export class LegendLeague {
    bestSeason: PlayerLegendSeason | null
    previousSeason: PlayerLegendSeason | null

    constructor(data: PlayerLegendLeague) {
        this.bestSeason = data.bestSeason ? new LegendSeason(data.bestSeason) : null
        this.previousSeason = data.previousSeason ? new LegendSeason(data.previousSeason) : null
    }
}
