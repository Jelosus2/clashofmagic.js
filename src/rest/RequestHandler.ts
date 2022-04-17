import fetch  from "node-fetch";

/* Represents the Request Handler */
export class RequestHandler {
    /* The server of CoM to get the information */
    server: string
    
    constructor(server: string) {
        this.server = server
    }

    /* Do the requests to the API and return the response */
    async request(path: string) {
        const res = await fetch(`https://api.clashofmagic.cc/magic-${this.server}/${path}`, {
            method: 'GET' 
        }).catch(() => null)

        const data = await res?.json().catch(() => null)

        return data
    }
}