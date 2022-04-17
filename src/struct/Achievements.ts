import { PlayerAchievements } from "../types";

export class Achievements {
    /* The best trophies of the player */
    bestTrophies: number
    /* The best trophies of the player in the builder village */
    bestBuilderTrophies: number
    /* The war stars of the player */
    warStars: number

    constructor(data: PlayerAchievements) {
        this.bestTrophies = data.bestTrophies
        this.bestBuilderTrophies = data.bestBuilderTrophies
        this.warStars = data.warStars
    }
}