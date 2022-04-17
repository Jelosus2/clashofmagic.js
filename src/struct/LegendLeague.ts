import { PlayerLegendLeague, PlayerLegendSeason } from '../types'
import { LegendSeason } from './LegendSeason'

export class LegendLeague {
    /* Best season stats of a player in legend league, if the player never reached legend league will return 'null' */
    bestSeason: PlayerLegendSeason | null
    /* Previous season stats of a player in legend league, if the player never reached legend league will return 'null' */
    previousSeason: PlayerLegendSeason | null

    constructor(data: PlayerLegendLeague) {
        this.bestSeason = data.bestSeason ? new LegendSeason(data.bestSeason) : null
        this.previousSeason = data.previousSeason ? new LegendSeason(data.previousSeason) : null
    }
}
