const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    var botIcon = bot.user.displayAvatarURL;

    const botEmbed = new discord.MessageEmbed()
        .setTitle("Discord bot info")
        .setColor("#ee0000")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Gemaakt door: Jerrold > zombiepikman")
        .addField("Gemaakt op:", bot.user.createdAt);

    return message.channel.send(botEmbed);




}

module.exports.help = {
    name: "info"

}