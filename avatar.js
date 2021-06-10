// Discord v12 avatar komutu 
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var user = message.mentions.users.first();

  if (!user || user == undefined)
	{
      user = message.author;
	}
  let avatar = user.avatarURL({ dynamic: true, size: 2048 });
  let embed = new Discord.MessageEmbed()
	.setColor(0x2f3136)
  .setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
	.setImage(avatar)
	message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["av"],
  permLevel: `Yetki gerekmiyor.`
};
exports.help = {
  name: 'av',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
  usage: 'av <@kişi-etiket> veya +avatar'
};
