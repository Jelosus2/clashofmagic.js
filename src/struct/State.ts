import { WarState } from "../types"

export class State {
    stars: number
    percentage: number

    constructor(data: WarState) {
        this.stars = data.stars
        this.percentage = data.percentage
    }
}