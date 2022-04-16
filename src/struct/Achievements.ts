import { PlayerAchievements } from "../types";

export class Achievements {
    bestTrophies: number
    bestBuilderTrophies: number
    warStars: number

    constructor(data: PlayerAchievements) {
        this.bestTrophies = data.bestTrophies
        this.bestBuilderTrophies = data.bestBuilderTrophies
        this.warStars = data.warStars
    }
}