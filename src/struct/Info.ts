import { ClanInfo } from "../types"
import { WarStatistics } from "./WarStatistics"

export class Info {
    /* The name of the clan */
    name: string
    /* The description of the clan */
    description: string
    /* The level of the clan */
    level: number
    /* The xp of the clan */
    xp: number
    /* The type of the clan, can be AnyoneCanJoin, InviteOnly or Closed */
    type: string
    /* An array with the labels of the clan */
    tags: string[]
    /* The location of the clan */
    clanLocation: string
    /* The language of the clan chat */
    chatLocales: string
    /* The frequency of the clan wars */
    warFrequency: string
    /* The trophies of the clan based on players trophies in the main village */
    mainTrophies: number
    /* The trophies of the clan based on players trophies in the builder village */
    builderTrophies: number
    /* The required main village trophies to join the clan */
    requiredTrophies: number
    /* The required builder village trophies to join the clan */
    requiredBuilderTrophies: number
    /* The required townhall level to join the clan */
    requiredTownHallLevel: number
    /* Returns 'true' if its enabled and 'false' if not */
    publicWarLogEnabled: boolean
    /* Returns 'true' if they are enabled and 'false' if not */
    friendlyWarsEnabled: boolean
    /* The war statistics of a clan, they will be null if the war log is disabled */
    warStatistics: WarStatistics | null

    constructor(data: ClanInfo) {
        this.name = data.name
        this.description = data.description
        this.level = data.level
        this.xp = data.xp
        this.type = data.type
        this.tags = data.tags
        this.clanLocation = data.clanLocation
        this.chatLocales = data.chatLocales
        this.warFrequency = data.warFrequency
        this.mainTrophies = data.mainTrophies
        this.builderTrophies = data.builderTrophies
        this.requiredTrophies = data.requiredTrophies
        this.requiredBuilderTrophies = data.requiredBuilderTrophies
        this.requiredTownHallLevel = data.requiredTownHallLevel
        this.publicWarLogEnabled = data.publicWarLogEnabled
        this.friendlyWarsEnabled = data.friendlyWarsEnabled
        this.warStatistics = data.warStatistics ? new WarStatistics(data.warStatistics) : null
    }
}