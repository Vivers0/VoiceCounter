{ Client } = require 'discord.js'
client = new Client
config = require '../config.json'

client.login(config.token)

client.on("ready", () -> console.log("Ready!"))

client.on("voiceStateUpdate", (oldMember, newMember) -> 
  newUserChannel = newMember.voiceChannel
  oldUserChannel = oldMember.voiceChannel
  voicetext = "🌌 В войсе: "
  ch = client.channels.get(config.channelID)

  if newUserChannel and not oldUserChannel 
      ch.setName("#{voicetext}#{newMember.guild.members.filter((m) -> m.voiceChannel).size}")
  
  if not newUserChannel and oldUserChannel 
      ch.setName("#{voicetext}#{newMember.guild.members.filter((m) -> m.voiceChannel).size}")
    )
