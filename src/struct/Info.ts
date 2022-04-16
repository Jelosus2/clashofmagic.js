import { ClanInfo } from "../types"
import { WarStatistics } from "./WarStatistics"

export class Info {
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