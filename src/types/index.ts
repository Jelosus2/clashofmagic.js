/* The types for the data structure */

export interface APIPlayer {
    tag: string
    clanTag: string
    region: string
    analytics: PlayerAnalytics
    avatar: PlayerAvatar
}

export interface PlayerAnalytics {
    createTime: PlayerCreateTime
}

export interface PlayerCreateTime {
    time: string
}

export interface PlayerAvatar {
    name: string
    level: number
    xp: number
    league: string
    leagueIcon: string
    townHallLevels: PlayerTHLevels
    statistics: PlayerStatistics
    mainTrophies: number
    builderTrophies: number
    legendaryTrophies: number
    legendaryTrophiesBuilder: number
    legendLeague: PlayerLegendLeague
    commodity: PlayerCommodity
}

export interface PlayerTHLevels {
    main: number
    builder: number
}

export interface PlayerStatistics {
    mainAttackWins: number
    mainAttackLosses: number
    mainDefenseWins: number
    mainDefenseLosses: number
    builderWins: number
    builderDraws: number
    builderLosses: number
}

export interface PlayerLegendLeague {
    bestSeason: PlayerLegendSeason
    previousSeason: PlayerLegendSeason
}

export interface PlayerLegendSeason{
    month: number
    year: number
    score: number
    rank: number
}

export interface PlayerCommodity {
    achievements: PlayerAchievements
}

export interface PlayerAchievements {
    bestTrophies: number
    bestBuilderTrophies: number
    warStars: number
}

export interface APIClan {
    tag: string
    info: ClanInfo
    members: ClanMembers[]
}

export interface ClanInfo {
    name: string
    description: string
    level: number
    xp: number
    type: string
    tags: string[]
    clanLocation: string
    chatLocales: string
    warFrequency: string
    mainTrophies: number
    builderTrophies: number
    requiredTrophies: number
    requiredBuilderTrophies: number
    requiredTownHallLevel: number
    publicWarLogEnabled: boolean
    friendlyWarsEnabled: boolean
    warStatistics: ClanWarStatistics
}

export interface ClanWarStatistics {
    totalWars: number
    wins: number
    draws: number
    losses: number
    consecutiveWins: number
}

export interface ClanMembers {
    tag: string
    role: string
    donation: ClanDonations
}

export interface ClanDonations {
    sent: number
    received: number
}

export interface APIToken {
    status: string
}

export interface APIClanWar {
    membersCount: number
    state: string
    current: WarTeams
    opponent: WarTeams
    warDuration: string
    preparationDuration: string
    attacksPerPlayer: number
    warStartTime: WarTime
    warEndTime: WarTime
}

export interface WarTime {
    time: string
}

export interface WarTeams {
    totalDestruction: number
    totalStars: number
    alliance: WarAlliance
    members: WarMembers[]
}

export interface WarAlliance {
    tag: string
    name: string
    level: number
}

export interface WarMembers {
    tag: string
    name: string
    townHallLevel: number
    mapPosition: number
    attackCount: number
    defenseCount: number
    state: WarState
}

export interface WarState {
    stars: number
    percentage: number
}

export interface ClanMembersEvent {
    tag: string 
}

export interface PlayerNameEvent {
    name: string
}

export interface PlayerLeagueEvent {
    league: string
    leagueIcon: string
}