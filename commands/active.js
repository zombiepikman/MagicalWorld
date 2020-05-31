const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, hier heb jij **geen** rechten voor!");

if(args[0] == null) return ("Use: !active");

    var user = message.author;

    var reason = args.join(" ");
  
    message.delete();

    var inactiveEmbed = new discord.MessageEmbed()
        .setTitle("activity")
        .setColor("#196619")
        .setDescription(`User ${user} Is active again!`);

    message.channel.send(`${user} \n Your active has been sent to the directors!`);



    var consoleChannel = message.guild.channels.cache.find(c => c.name == "🔷console");
    if (!consoleChannel) return console.log("Kan het kanaal niet vinden!");

   return consoleChannel.send(inactiveEmbed);

}

module.exports.help = {
    name: "active"

}