import { PlayerAnalytics } from '../types'
import * as moment from 'moment'

export class Analytics {
    createTime: string

    constructor(data: PlayerAnalytics) {
        this.createTime = data.createTime
    }

    formatCreateTime(input?: string) {
        if (!input) input = 'DD/MM/YYYY h:mm:ss'
        return moment.default(this.createTime).format(input)
    }
}