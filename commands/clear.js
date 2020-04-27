const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 if(!message.member.permissions.has("KICK_MEMBER")) return message.channel.send("Hier heb jij geen rechten voor!");

 if(!args[0]) return message.channel.send("Geef een aantal berichten op dat ik moet verwijderen!");

 if(Number.isInteger(parseInt(args[0]))){

var amount = parseInt(args[0]) + 2;

message.channel.bulkDelete(amount).then(() => {

message.channel.send(`${args[0]} message(s) deleted`)

 });

 } else {
return message.channel.send("Geef een getal op");

 }

}

module.exports.help = {
    name: "clear"

}