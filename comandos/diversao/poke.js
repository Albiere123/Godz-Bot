const Discord = require('discord.js')
const sp = require('superagent')
exports.run = async (client, message, args) => {
  const member = message.mentions.users.first()
  if(!member) return message.channel.send('Mencione alguem..')
  const {body} = await sp
  .get('https://nekos.life/api/v2/img/poke')
  let embed = new Discord.MessageEmbed()
  .setDescription(`<@${message.author.id}> Cutucou ${member}`)
  .setImage(body.url)
  message.channel.send(embed)
}

exports.help = {
  name: 'poke',
  aliases: ['cutucar']
}