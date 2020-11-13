const { MessageEmbed } = require('discord.js');
 
module.exports.run = (client, message, args) => {
 
  let pages = [
              '1. sayfada yazmasını istediğiniz şeyleri girmelisiniz',
              '2. sayfada yazmasını istediğiniz şeyleri girmelisiniz',
              '3. sayfada yazmasını isteidğiniz şeyleri girmelisiniz'
];
  let page = 1;
 
  const burak = new MessageEmbed()
    .setColor('0x2f3136')
    .setFooter(`~ Sunucu adınızı vs yazabilirsiniz \n Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(burak).then(msg => {
  msg.react('⬅')
  .then(r => {
  msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('0x2f3136')
        embed.setFooter(`~ Sunucu adınızı vs yazabilirsiniz. \n Sayfa ${page} / ${pages.length}`)
        msg.edit(burak)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('0x2f3136')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`~ Sunucu adınızı vs yazabilirsiniz. \n Sayfa ${page} / ${pages.length}`)
        msg.edit(burak)
      })
 
    })
  })
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Burak denilen türeme',
  usage: 'yardım'
};
