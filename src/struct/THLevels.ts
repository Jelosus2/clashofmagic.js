import { PlayerTHLevels } from "../types"

export class THLevels {
    /* The Townhall level of the player */
    main: number
    /* The Builder hall level of the player */
    builder: number

    constructor(data: PlayerTHLevels) {
        this.main = data.main
        this.builder = data.builder
    }
}