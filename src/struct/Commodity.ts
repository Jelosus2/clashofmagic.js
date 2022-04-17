import { PlayerCommodity, PlayerAchievements } from "../types";
import { Achievements } from "./Achievements";

export class Commodity {
    /* Information such as best trophies and war stars */
    achievements: PlayerAchievements | null

    constructor(data: PlayerCommodity) {
        this.achievements = data.achievements ? new Achievements(data.achievements) : null
    }
}