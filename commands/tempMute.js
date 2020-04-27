const discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {

// !tempmute gebruiker tijd

if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, hier heb jij **geen** rechten voor!");

var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet gevonden");

if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze persoon kan je niet muten!");

var muteRole = message.guild.roles.cache.find(r => r.name ==  "Muted");

if(!muteRole) return message.channel.send(`De rol 'Muted' bestaad niet!`);


var muteTime = args[1];

if(!muteTime) return message.channel.send("Geef een tijd mee");

await user.roles.add(muteRole);

message.channel.send(`${user} is gemuted voor ${muteTime}`);

setTimeout(function() {

    user.roles.remove(muteRole);
    
    message.channel.send(`${user} is geunmuted!`);


}, ms(muteTime));


}

module.exports.help = {
    name: "tempmute"

}