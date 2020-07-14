const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {

if(!message.member.voice.channel) return message.reply("Join een spraak kanaal");

if(message.guild.me.voice.channel) message.channel.send("De bot is al verbonden!");

if(!args[0]) return message.reply("Geef een YT link mee!");

var valitdate = await ytdl.validateURL9[0];
if(!valitdate) message.reply("Geef een YT link op!");

var info = await ytdl.getInfo(args[0]);

var options ={ seek: 3, volume: 1 };

var channelJoin = message.member.voice.channel.join()
.then(voiceChannel => {

var stream = ytdl(args[0], {filter: 'audioonly'});
var dispatcher = voiceChannel.play(stream, options);


}).cath(console.error);

message.channel.send(`Nu aan het spelen: ${info.title}`);

}

module.exports.help = {
    name: "play"

}