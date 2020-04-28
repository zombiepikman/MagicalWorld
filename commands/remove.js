const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermissiosn("KICK_MEMBERS")) return message.channel.send("Hier heb jij **geen** rechten voor!");

 if(args[0] == null) return message.channel.send("Gebruik: !remove (user)");

if(args[1] == null) return message.channel.send("Geef een user op!"); 
 
    var createdChan = userName + "-" + userDiscriminator;

    createdChan.setParent(categoryId).then((settedParent) => {

    settedParent.updateOverwrite(message.author, {
        "SEND_MESSAGES": false, "VIEW_CHANNEL": false,
        "ATTACH_FILES": false 
    });
    


})};

module.exports.help = {
    name: "remove"

}