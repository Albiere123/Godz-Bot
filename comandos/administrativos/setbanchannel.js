const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send('Mencione Um Canal!')
  let embed = new Discord.MessageEmbed()
  .setTitle('DashBoard | Painel De Controle')
  .addField('Canal De Banimentos Alterado Para', canal)
  message.channel.send(embed)
  db.set(`bcanal_${message.guild.id}`, canal)
}
exports.help = {
  name: 'setbanchannel',
  aliases: ['setbanc']
}