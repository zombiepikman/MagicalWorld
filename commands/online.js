const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, hier heb jij **geen** rechten voor!");


var sendChannel = message.guild.channels.cache.find(c => c.name == "📢announcements"); 

var embedOnline = new discord.MessageEmbed()
.setColor("#00ff48")
.setTitle("Status")
.setDescription("the server is online!");

sendChannel.send(embedOnline);

message.channel.send("Done!");

}

module.exports.help = {
    name: "online"

}