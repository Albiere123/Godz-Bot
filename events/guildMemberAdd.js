const Discord = require('discord.js')
const db = require('quick.db')
module.exports = async(member) => {
  let canal = db.get(`welcanal_${member.guild.id}`)
  let wel = canal.id
  let messageT = db.get(`welTitle_${member.guild.id}`)
  if(!messageT) messageT = 'Welcome'
  let messaged = db.get(`welDes_${member.guild.id}`)
  if(!messaged) messaged = 'Bem Vindo Ao ' + member.guild + '! Espero Que Se Divirta.'
  let embed = new Discord.MessageEmbed()
  .setTitle(messageT)
  .setDescription(messaged)
  canal.send(embed)
}