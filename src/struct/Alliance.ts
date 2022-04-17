import { WarAlliance } from "../types"

export class Alliance {
    /* The tag of the clan in war */
    tag: string
    /* The name of the clan in war */
    name: string
    /* The level of the clan in war */
    level: number

    constructor(data: WarAlliance) {
        this.tag = data.tag
        this.name = data.name
        this.level = data.level
    }
}