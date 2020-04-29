const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var sendChannel = message.guild.channels.cache.find(c => c.name == "📢announcements"); 

var embedOffline = new discord.MessageEmbed()
.setColor("#00ee00")
.setTitle("Status")
.setDescription("the server is offline! \n We'll let you know when our server is back online!");

sendChannel.send(embedOffline);

message.channel.send("Done!");

}

module.exports.help = {
    name: "online"

}