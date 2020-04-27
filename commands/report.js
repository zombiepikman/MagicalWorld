const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    var prefix = botConfig;

    if (!args[0]) return message.channel.send(`Gebruik de command als volgt: !report username reason`);

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send(`Speler niet gevonden!`);

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send(`Je moet een reden opgeven!`);

    var reportEmbed = new discord.MessageEmbed()
        .setTitle("Report")
        .setColor("ff0000")
        .addField("Reported gebruiker", `${user} met het ID ${user.id}`)
        .addField("Reported door:", `${message.author} met het ID ${message.author.id}`)
        .addField("Reden", reason)
        .setFooter(message.createdAt);

    var reportChannel = message.guild.channels.cache.find(c => c.name == "🔷console");
    if (!reportChannel) return message.channel.send(`Kanaal niet gevonden!`)

    message.delete();

    return reportChannel.send(reportEmbed);
    

}

module.exports.help = {
    name: "report"

}