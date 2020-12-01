const { Client } = require('discord.js')
const client = new Client()
const { token, channelID } = require('./config.json')


client.on('voiceStateUpdate', async (oldMember, newMember) => {
    const channel = client.channels.cache.get(channelID)
    const voiceChannels = newMember.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    channel.setName(`В войсе: ${count}`)

})

client.login(token)
