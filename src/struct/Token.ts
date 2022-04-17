import { APIToken } from "../types"

export class Token {
    /* The status of the API Token */
    status: string

    constructor(data: APIToken) {
        this.status = data.status 
    }
}