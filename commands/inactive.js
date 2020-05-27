const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, hier heb jij **geen** rechten voor!");

if(args == null) return ("!inactive reason time");

    var user = message.author;


    var reason = args.join(" ").slice(22);




  
    message.delete();

    var inactiveEmbed = new discord.MessageEmbed()
        .setTitle("Inactivity")
        .setColor("ee0000")
        .addField("Inactive user:", user)
        .addField("Reason", reason);

    message.channel.send(`${user} \n Your inactive time has been sent to the directors!`);



    var consoleChannel = message.guild.channels.cache.find(c => c.name == "🔷console");
    if (!warnChannel) return console.log("Kan het kanaal niet vinden!");

    return consoleChannel.send(inactiveEmbed);

}

module.exports.help = {
    name: "inactive"

}