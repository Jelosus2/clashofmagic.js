import { PlayerCreateTime } from "../types"
import * as moment from 'moment'

export class CreateTime {
    /* The date when the player account was created */
    time: PlayerCreateTime

    constructor(data: PlayerCreateTime) {
        this.time = data
    }

    /* Format the date of player creation account */
    format(input?: string) {
        if (!input) input = 'DD/MM/YYYY h:mm:ss'

        // @ts-ignore
        return moment.default(this.time).format(input)
    }
}