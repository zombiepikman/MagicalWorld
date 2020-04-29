const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var sendChannel = message.guild.channels.cache.find(c => c.name == "📢announcements"); 

var embedOnline = new discord.MessageEmbed()
.setColor("#00ff48")
.setTitle("Status")
.setDescription("the server is online!");

sendChannel.send(embedOnline);

}

module.exports.help = {
    name: "online"

}