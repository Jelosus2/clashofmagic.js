export const playerErrors: { [key: string]: string } = {
    2: "Invalid player tag!",
    3: "Unable to parse tag!",
    4: "User not found!"
}

export const clanErrors: { [key: string]: string } = {
    2: "Invalid clan tag!",
    3: "Unable to parse tag!",
    4: "Clan not found!"
}

export const tokenErrors: { [key: string]: string } = {
    3: "Unable to parse tag!",
    4: "Invalid Token or Token Expired!",
    5: "API Token mismatch for player tag!"
}

export const warErrors: { [key: string]: string } = {
    3: "Unable to parse tag!",
    4: "Clan not found!",
    6: "The specified clan is not looking for a war neither in a war right now."
}

export class APIError extends Error {
    status: number
    message: string
    path: string

    constructor(error: any, path: string, resStatus: number) {
        super()

        this.message = error[resStatus]
        this.status = resStatus
        this.path = path
    }
}