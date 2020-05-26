const discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send('Coloque Um Nick..')
  let link = `https://mc-heads.net/combo/${args[0]}`
  if(!link) return message.channel.send('Não Encontrei Nenhum Nickname Assim...')
  let embed = new discord.MessageEmbed()
  .setTitle('Combo Do ' + args[0])
  .setImage(link)
  message.channel.send(embed)
}


exports.help = {
  name: 'mccombo',
  aliases: []
}