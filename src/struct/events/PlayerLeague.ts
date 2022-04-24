import { PlayerLeagueEvent } from '../../types'

export class PlayerLeague {
    /* The new league of the player */
    league: string | undefined
    /* The new league icon of the player */
    leagueIcon: string | undefined

    constructor(data: PlayerLeagueEvent | null) {
        this.league = data?.league
        this.leagueIcon = data?.leagueIcon
    }
}