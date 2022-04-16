import { PlayerTHLevels } from "../types"

export class THLevels {
    main: number
    builder: number

    constructor(data: PlayerTHLevels) {
        this.main = data.main
        this.builder = data.builder
    }
}