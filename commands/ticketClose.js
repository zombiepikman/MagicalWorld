const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("O, hier heb jij **geen** rechten voor");

  const categoryId = "643519706640416787";

  if (message.channel.parentID == categoryId) {

    message.channel.delete();

  } else {

    message.channel.send("Dit kan alleen in ticket kanaal!");
 

  };

var botCommands = message.guild.channels.cache.find(c => c.name == "🧾commands"); 
   
  var embedCloseTicket = new discord.MessageEmbed()
    .setTitle("Hello, " + message.channel.name)
    .setDescription(`:flag_nl: Je ticket is gemarkeerd als **Afgerond**, Wilt u een nieuwe maken doe dan !ticket \n :flag_gb: Your ticket is marked as **completed** If you want to make a new one please do !Ticket`)
    .setFooter("Ticket gesloten");

   botCommands.send(embedCloseTicket);

  var logsChannel = message.guild.channels.cache.find(c => c.name == "ticket-archief");
  if (!logsChannel) return message.channel.send("Kan het kanaal niet vinden");


  var embedCloseTicket2 = new discord.MessageEmbed()
  .setTitle("Er is een ticket gesloten!")
  .setDescription(`De ticket van ${message.channel.name} is gesloten! De ticket is gesloten door: ${message.author}`)
  .setFooter("Ticket gesloten");

logsChannel.send(embedCloseTicket2);

}

module.exports.help = {
  name: "close"

}