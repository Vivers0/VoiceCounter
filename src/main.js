const { Client: DiscordClient } = require('discord.js')

class Client extends DiscordClient {
    constructor (options) {
        super(options)
        this.token = options.token
        this.channel = options.channel
    }

    start () {
        this.login(this.token)
        this.on('ready', () => console.log('Ready!'))
        this.on('voiceStateUpdate', (om, nm) => this.voiceState(om, nm))
    }

    voiceState (oldMember, newMember) {
        const channel = this.channels.cache.get(this.channel)
        const voiceChannels = newMember.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;
        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        channel.setName(`В войсе: ${count}`)
    }
}

module.exports = Client