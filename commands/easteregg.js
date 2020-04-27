const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var console = message.guild.channels.cache.find(c => c.name == "🔷console"); 

message.delete();

  message.author.send("How great! you have found the easteregg! don't tell anyone!");
  console.send(`${user} has found the easteregg (!secret) and received his rank!`);

  

}

module.exports.help = {
    name: "secret"

}