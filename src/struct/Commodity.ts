import { PlayerCommodity, PlayerAchievements } from "../types";
import { Achievements } from "./Achievements";

export class Commodity {
    achievements: PlayerAchievements | null

    constructor(data: PlayerCommodity) {
        this.achievements = data.achievements ? new Achievements(data.achievements) : null
    }
}