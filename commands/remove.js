const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "643519706640416787";

    if (message.channel.parentID == categoryId) {
  
      message.channel.delete();
  
    } else {
  
      message.channel.send("Dit kan alleen in ticket kanaal!");
   
  
    };

var user2 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("Hier heb jij **geen** rechten voor!");

if(args[0] == null) return message.channel.send("Use: !remove (user)");

if(user.permissions.has("KICK_MEMBERS")) return message.channel.send("Deze gebruiker kan je niet van de ticker verwijderen.");

channel.updateOverwrite(user2, {
    "SEND_MESSAGES": true, "VIEW_CHANNEL": true,
    "ATTACH_FILES": true
});


var removeEmbed = new discord.MessageEmbed()
.setColor("#00ee00")
.setTitle(`User ${user} removed from the ticket!`);

message.channel.send(removeEmbed);
 
}

module.exports.help = {
    name: "remove"

}