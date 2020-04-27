const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var bericht2 = args.join(" ");

var bericht = new discord.MessageEmbed()
.setTitle(`${bericht2}`)
.setColor("#0000cc");

message.delete();

    return message.channel.send(bericht);



}

module.exports.help = {
    name: "bericht"

}