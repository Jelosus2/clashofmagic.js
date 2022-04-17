import { WarState } from "../types"

export class State {
    /* The stars an opponent player got attacking the player */
    stars: number
    /* The percentage an opponent player did attacking the player */
    percentage: number

    constructor(data: WarState) {
        this.stars = data.stars
        this.percentage = data.percentage
    }
}