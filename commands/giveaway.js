const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, hier heb jij **geen** rechten voor!");

    if (args[0] == null) return message.channel.send("Gebruik: !giveaway (aantal winnaars) (hoelang het duurt) (wat je kan winnen)");

    if (args[1] == null) return message.channel.send("Geef op hoelang de giveaway moet duren");

    if (args[2] == null) return message.channel.send("Geef op want je kan winnen!");

    if(isNaN(Number(args[0]))) return message.channel.send("Het aantal winnaars is **geen getal**");

    if(isNaN(Number(args[1]))) return message.channel.send("Hoelang de giveaway moet duren is **geen getal**");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    message.delete();

    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));

    var embed = new discord.MessageEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Vervalt op: ${dateTime}`)
        .setDescription(item);

    var embedSend = await message.channel.send(embed);
    embedSend.react("🎉");

    setTimeout(function () {

        var winners = [];

        var random = 0;

        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue
            }

        }

        if (peopleReacted.length == 0) {
            return message.channel.send("Niemand heeft gewonnen");

        }

        if (peopleReacted.length < winnerCount) {
            return message.channel.send(`Not enough people participated to choose ${winnerCount} winners!`);

        }

        for (let i = 0; i < winnerCount; i++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let y = 0; y < winners.length; y++) {

                if (winners[y] == peopleReacted[random]) {
                    inList = true;
                    i--;
                    break;
                }

            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }
        }

        for (let i = 0; i < winners.length; i++) {
            message.channel.send("Congratulations " + winners [i] .toString () + ` You won: ** ${item} **! Create a ticket to claim your prize!`);
        }

    }, time * 1000);


}


module.exports.help = {
    name: "giveaway"

}