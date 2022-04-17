import { WarTime } from "../types"
import * as moment from 'moment'

export class Time {
    /* The date when war start and end */
    time: WarTime

    constructor(data: WarTime) {
        this.time = data
    }

    /* Format the date when war start and end */
    format(input?: string) {
        if (!input) input = 'DD/MM/YYYY h:mm:ss'

        // @ts-ignore
        return moment.default(this.time).format(input)
    }
}