import { PlayerAvatar } from '../types'
import { LegendLeague } from './LegendLeague'
import { THLevels } from './THLevels'
import { PlayerStatistic } from './PlayerStatistic'
import { Commodity } from './Commodity'

export class Avatar {
    name: string
    level: number
    xp: number
    league: string
    leagueIcon: string
    townHallLevels: THLevels | null
    statistics: PlayerStatistic | null
    mainTrophies: number
    builderTrophies: number
    legendaryTrophies: number
    legendaryTrophiesBuilder: number
    legendLeague: LegendLeague | null
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