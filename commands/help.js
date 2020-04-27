const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    return message.channel.send("*Speler commands*: \n \n **!help** open the help menu \n **!server-info** shows information about the server \n **!info** shows information about the bot\n **!report** Report a player \n **!ticket** Create a ticket \n\n*Staff commands:* \n\n **!broadcast** Make a broadcast \n **!close** Close a ticket \n**!giveaway** make a giveaway \n **!clear** delete some messages \n **!warn** Warn a player \n **!tempmute** temporarily mute a player");


}

module.exports.help = {
    name: "help"

}