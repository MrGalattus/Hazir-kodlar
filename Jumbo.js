// Discord.js V12 
// Emojinin fotoğraf olarak chatte görünmesini sağlayan komuttur
const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
exports.run = async (client, message, args) => {
  
    const emoji = args[0];
    if (!emoji) return
    let custom = Discord.Util.parseEmoji(emoji);
    if (custom.id) {
        return message.channel.send(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png' }`);
    }
    else {
        let parsed = parse(emoji, { assetType: "png" });
        return message.channel.send(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'}`);
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['jumbo'],
  permLevel: 0
};
exports.help = {
  name: 'jumbo',
  description: 'Adı girilen emojinin resmini atar.',
  usage: 'jumbo',
  kategori: 'kullanıcı'
};
