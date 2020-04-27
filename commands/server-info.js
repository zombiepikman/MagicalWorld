const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    const serverEmbed = new discord.MessageEmbed()
        .setTitle("Server info")
        .setColor("#29e53f")
        .setThumbnail(icon)
        .addField("Server name: \n MagicalWorld")
        .addField("You are joined on:", message.member.joinedAt)
        .addField("Total number of members", message.guild.memberCount);

    return message.channel.send(serverEmbed);


}

module.exports.help = {
    name: "server-info"

}