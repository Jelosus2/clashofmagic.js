import { PlayerNameEvent } from "../../types"

export class PlayerName {
    /* The new and old name of the player */
    name: PlayerNameEvent

    constructor(data: PlayerNameEvent) {
        this.name = data
    }
}