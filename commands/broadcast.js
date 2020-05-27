const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("O, Jij hebt hier **geen** rechten voor");

    var splitser = "//";

    if (args[0] == null) {

        var useMesage = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#00ee00")
            .setDescription(`Maak een omroep door gebruikt te maken van: \n **!broadcast Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal**`);

        return message.channel.send(useMesage);

    }

    args = args.join(" ").split(splitser);

    if (args[2] == undefined) args[2] = "#ee0000";
    if (args[3] == undefined) args[3] = "algemeen";


    var options = {

        titel: args[0] || "Melding",
        bericht: args[1] || "Geen bericht opgegeven",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.MessageEmbed()
        .setTitle("Broadcast")
        .setColor(options.kleur)
        .setDescription(` \n\n\n **${options.titel}** \n\n ${options.bericht} \n`)
        .setTimestamp();
       await message.delete();

    var announcementChannel = message.guild.channels.cache.find(c => c.name == options.kanaal);
    if (!announcementChannel) return message.channel.send("Kan het kanaal niet vinden!");

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "broadcast"

}