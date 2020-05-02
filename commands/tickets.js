const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const categoryId = "643519706640416787";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.cache.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket!");

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Hello, " + message.author.username)
        .setDescription(`Your ticket is being created!`);

    message.channel.send(embedCreateTicket);

    message.guild.channels.create(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {


            settedParent.updateOverwrite(message.guild.roles.everyone, { "VIEW_CHANNEL": false });

            settedParent.updateOverwrite(message.author, {
                "SEND_MESSAGES": true, "VIEW_CHANNEL": true,
                "ATTACH_FILES": true
            });

            message.guild.roles.fetch('668889020973056046').then(role => settedParent.updateOverwrite(role, {
                "SEND_MESSAGES": true, "VIEW_CHANNEL": true,
                "ATTACH_FILES": true })).catch(console.error);

            var embedParrent = new discord.MessageEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Put your question or message here and you will be helped as soon as possible`)

            settedParent.send(embedParrent);
settedParent.send("@everyone")
message.delete();
 
        })

    })
};






module.exports.help = {
    name: "ticket"

}