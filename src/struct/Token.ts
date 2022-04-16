import { APIToken } from "../types"

export class Token {
    status: string

    constructor(data: APIToken) {
        this.status = data.status 
    }
}