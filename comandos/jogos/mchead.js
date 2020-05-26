const discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send('Coloque Um Nick..')
  let link = `https://mc-heads.net/avatar/${args[0]}`
  if(!link) return message.channel.send('Não Encontrei Nenhum Nickname Assim...')
  let embed = new discord.MessageEmbed()
  .setTitle('Cabeça De ' + args[0])
  .setImage(link)
  message.channel.send(embed)
}


exports.help = {
  name: 'mchead',
  aliases: []
}