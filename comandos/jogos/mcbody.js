const discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send('Coloque Um Nick..')
  let link = `https://mc-heads.net/player/${args[0]}`
  if(!link) return message.channel.send('Não Encontrei Nenhum Nickname Assim...')
  let embed = new discord.MessageEmbed()
  .setTitle('Corpo De ' + args[0])
  .setImage(link)
  message.channel.send(embed)
}
//https://mc-heads.net/combo/_SouFake

exports.help = {
  name: 'mcbody',
  aliases: []
}