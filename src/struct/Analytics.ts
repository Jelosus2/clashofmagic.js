import { PlayerAnalytics } from '../types'
import { CreateTime } from './CreateTime'

export class Analytics {
    /* The date when the player account was created */
    createTime: CreateTime | null 

    constructor(data: PlayerAnalytics) {
        this.createTime = data.createTime ? new CreateTime(data.createTime) : null
    }
}