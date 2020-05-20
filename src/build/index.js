// Generated by CoffeeScript 2.5.1
(function() {
  var Client, client, config;

  ({Client} = require('discord.js'));

  client = new Client();

  config = require('../config.json');

  client.login(config.token);

  client.on("ready", function() {
    return console.log("Ready!");
  });

  client.on("voiceStateUpdate", function(oldMember, newMember) {
    var ch, newUserChannel, oldUserChannel, voicetext;
    newUserChannel = newMember.voiceChannel;
    oldUserChannel = oldMember.voiceChannel;
    voicetext = "🌌 В войсе: ";
    ch = client.channels.get(config.channelID);
    if (newUserChannel && !oldUserChannel) {
      ch.setName(`${voicetext}${newMember.guild.members.filter(function(m) {
        return m.voiceChannel;
      }).size}`);
    }
    if (!newUserChannel && oldUserChannel) {
      return ch.setName(`${voicetext}${newMember.guild.members.filter(function(m) {
        return m.voiceChannel;
      }).size}`);
    }
  });

}).call(this);