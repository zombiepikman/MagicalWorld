const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, arguments) => {

if(!message.member.voice.channel) return message.reply("I must be connected to a voice channel");

if(message.guild.me.voice.channel) return message.channel.send("I am already in use!");

if(args[0]) return message.reply("Provide a link");

var validate = await ytdl.validateURL(args[0]);
if(!validate) return message.channel.send("You must use a Youtube link!");

var info = await ytdl.getInfo([0]);

var options = {seek: 3, volume: 1};

var channelJoin = message.member.voice.channel.join()
.then(voiceChannel => {

var stream = ytdl(args[0], {filter: 'audioonly' });
var dispatcher = voiceChannel.play(stream, options);

}).catch(console.error);

message.channel.send(`Now playing: ${info.title}`);

}

module.exports.help = {
    name: "help"

}