const discord = require("discord.js");
const fs = require("fs");



module.exports.run = async (bot, message, args) => {

    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, hier heb jij **geen** rechten voor!");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet gevonden");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze persoon kan je niet waarschuwen!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op!");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });

    message.delete();


    var warnEmbed = new discord.MessageEmbed()
        .setTitle("Warn")
        .setColor("ee0000")
        .addField("Warned gebruiker:", user)
        .addField("Gewarned door:", message.author)
        .addField("Reden:", reason)
        .addField("Aantal warns:", warns[user.id].warns);

    message.channel.send(`${user} \n :flag_nl: Je hebt een waarschuwing gehad!   reden: **${reason}** \n :flag_gb: You received a warning! reason: **${reason}**`);



    var warnChannel = message.guild.channels.cache.find(c => c.name == "🔷console");
    if (!warnChannel) return console.log("Kan het kanaal niet vinden!");

    return warnChannel.send(warnEmbed);



}

module.exports.help = {
    name: "warn"

}


