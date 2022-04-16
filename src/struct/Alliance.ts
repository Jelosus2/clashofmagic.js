import { WarAlliance } from "../types"

export class Alliance {
    tag: string
    name: string
    level: number

    constructor(data: WarAlliance) {
        this.tag = data.tag
        this.name = data.name
        this.level = data.level
    }
}