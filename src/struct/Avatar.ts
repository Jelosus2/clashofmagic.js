import { PlayerAvatar } from '../types'
import { LegendLeague } from './LegendLeague'
import { THLevels } from './THLevels'
import { PlayerStatistic } from './PlayerStatistic'
import { Commodity } from './Commodity'

export class Avatar {
    /* The name of the player */
    name: string
    /* The level of the player */
    level: number
    /* The xp of the player */
    xp: number
    /* The league of the player */
    league: string
    /* The icon URL of the league of the player */
    leagueIcon: string
    /* The levels of the Townhall and Builder hall */
    townHallLevels: THLevels | null
    /* The player statistics about attacks and defenses */
    statistics: PlayerStatistic | null
    /* The trophies of the player in the main village */
    mainTrophies: number
    /* The trophies of the player in the builder village */
    builderTrophies: number
    /* The legendary trophies of the player in the main village */
    legendaryTrophies: number
    /* The legendary trophies of the player in the builder village */
    legendaryTrophiesBuilder: number
    /* The legendary statistics about the player */
    legendLeague: LegendLeague | null
    /* Other information of the player such as best trophies and war stars */
    commodity: Commodity | null

    constructor(data: PlayerAvatar) {
        this.name = data.name
        this.level = data.level
        this.xp = data.xp
        this.league = data.league
        this.leagueIcon = data.leagueIcon
        this.townHallLevels = data.townHallLevels ? new THLevels(data.townHallLevels) : null
        this.statistics = data.statistics ? new PlayerStatistic(data.statistics) : null
        this.mainTrophies = data.mainTrophies
        this.builderTrophies = data.builderTrophies
        this.legendaryTrophies = data.legendaryTrophies
        this.legendaryTrophiesBuilder = data.legendaryTrophiesBuilder
        this.legendLeague = data.legendLeague ? new LegendLeague(data.legendLeague) : null
        this.commodity = data.commodity ? new Commodity(data.commodity) : null
    }
}