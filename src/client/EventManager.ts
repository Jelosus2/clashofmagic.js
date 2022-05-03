import { Client } from './Client'
import { ClientError } from '../rest/ClientError'
import { ClanMember, PlayerName, PlayerLeague, ClanWar } from '../struct'

/* The Event Manager for the client */
export class EventManager {
    /* The clan tag for clan events is stored here */
    private readonly clanTag: string[] = []
    /* Here is stored the clan member tags */
    private readonly addInfo: string[] = []
    /* Here is stored the clan member tags */
    private readonly removeInfo: string[] = []

    /* The player tag for player events is stored here */
    private readonly playerTag: string[] = []
    /* Here is stored the old name of the player */
    private readonly oldName: any[] = []
    /* Here is stored the old league of the player */
    private readonly oldLeague: any[] = []

    /* The date when a war start */
    private readonly warStartDate: any[] = []

    constructor(private readonly client: Client) {

    }

    /* Add the clan tag to use it in the clan events */
    addClan(tag: string) {
        if (!tag) throw new ClientError('You must input a clan tag')
        if (typeof tag !== 'string') throw new ClientError('The clan tag must be a string')

        this.clanTag.push(tag)
    }

    /* Add the player tag to use it in the player events */
    addPlayer(tag: string) {
        if (!tag) throw new ClientError('You must input a player tag')
        if (typeof tag !== 'string') throw new ClientError('The player tag must be a string')

        this.playerTag.push(tag)
    }

    /* Starts all the events */
    init() {
        this.clanMemberAdd()
        this.clanMemberRemove()
        this.playerNameUpdate()
        this.playerLeagueUpdate()
        this.clanWarStart()
    }

    /* The 'clanMemberRemove' event */
    private async clanMemberRemove() {
        setInterval(async () => {
            const clan = await this.client.getClan(this.clanTag[0])
            /* Get the members of the clan */
            const members = clan.members

            /* If the clan don't have members will return null */
            if (members.length == 0) return null

            /* Here we push the clan members who aren't already in the array */
            for (let data of members) {
                if (!this.removeInfo.includes(data.tag)) {
                    this.removeInfo.push(data.tag)
                }
            }

            /* If a player leaved the clan will return his data and remove his tag from the array */
            for (let data of this.removeInfo) {
                if (!members.find((x) => x.tag == data)) {
                    let info: any = data

                    const oldMember = new ClanMember(this.client, info)
                    this.client.emit('clanMemberRemove', oldMember)

                    const index = this.removeInfo.indexOf(data)
                    if (index > -1) {
                        this.removeInfo.splice(index, 1)
                    }
                }
            }
        }, 1000 * 60 * 8)
    }

    /* The 'clanMemberAdd' event */
    private async clanMemberAdd() {
        let isUploaded = false

        setInterval(async () => {
            const clan = await this.client.getClan(this.clanTag[0])
            /* Get the members of the clan */
            const members = clan.members

            /* If the clan don't have members will return null */
            if (members.length == 0) return null
            /* Here we push the clan members to the array if they weren't already in the array
            and when a new member join the clan will return his info */
            for (let data of members) {
                if (!this.addInfo.includes(data.tag) && !isUploaded) {
                   this.addInfo.push(data.tag)
                } else if (!this.addInfo.includes(data.tag) && isUploaded) {
                    let info: any = data.tag

                    const newMember = new ClanMember(this.client, info)
                    this.client.emit('clanMemberAdd', newMember)

                    this.addInfo.push(data.tag)
                }
            }

            /* The members are pushed to the db */
            isUploaded = true

            /* If a member left the clan is removed from the array */
            for (let data of this.addInfo) {
                if (!members.find(x => x.tag == data)) {
                    const index = this.addInfo.indexOf(data)
                    if (index > -1) {
                        this.addInfo.splice(index, 1)
                    }
                }
            }

        }, 1000 * 60 * 8)
    }

    /* The 'playerNameUpdate' event */
    private async playerNameUpdate() {
        setInterval(async () => {
            const player = await this.client.getPlayer(this.playerTag[0])
            /* We get the name of the player */
            const name: any = player.avatar?.name

            /* If there isn't a name if the array we push it */
            if (this.oldName.length == 0) this.oldName.push(name)

            /* If the name of the array isn't the same as the API one will return
            the old and new name and delete the previous one in the array to push the new one */
            if (this.oldName[0] != name) {
                const oldName = new PlayerName(this.oldName[0])
                const newName = new PlayerName(name)

                this.client.emit('playerNameUpdate', oldName, newName)

                const index = this.oldName.indexOf(this.oldName[0])
                if (index > -1) {
                    this.oldName.splice(index, 1)
                }

                this.oldName.push(name)
            }
        }, 1000 * 60 * 8)
    }

    /* The 'playerLeagueUpdate' */
    private async playerLeagueUpdate() {
        setInterval(async () => {
            const player = await this.client.getPlayer(this.playerTag[0])
            /* We get the information of the player */
            const info = player.avatar

            /* If there isn't the league of the player in the array we push it */
            if (this.oldLeague.length == 0) this.oldLeague.push(info?.league)

            /* If the league of the array isn't the same as the API one will return
            the new league and the icon and will delete the previous league from the array and push the new one */
            if (this.oldLeague[0] != info?.league) {
                const newLeague = new PlayerLeague(info)

                this.client.emit('playerLeagueUpdate', newLeague)

                const index = this.oldLeague.indexOf(this.oldLeague[0])
                if (index > -1) {
                    this.oldLeague.splice(index, 1)
                }

                this.oldLeague.push(info?.league)
            }
        }, 1000 * 60 * 8)
    }

    private async clanWarStart() {
        let i = 0

        setInterval(async () => {
            const war: any = await this.client.getClanWar(this.clanTag[0])
            let date = war.warStartTime

            if (this.warStartDate.length == 0) this.warStartDate.push(date)

            if (this.warStartDate[0] != date) {
                const warStart = new ClanWar(war)

                this.client.emit('clanWarStarted', warStart)

                const index = this.warStartDate.indexOf(this.warStartDate[0])
                if (index > -1) {
                    this.warStartDate.splice(index, 1)
                }

                this.warStartDate.push(date)
            }
        }, 1000 * 60 * 8)
    }
}