const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar esse comando!") 
  
  let channel = message.mentions.channels.first()
  if(!channel) return message.channel.send("Erro! Mencione um canal")
  
  let embed = new Discord.MessageEmbed()
  .setTitle("**Canal Definido!**")
  .setDescription(`Novo canal de warns! ${channel}`)
  message.channel.send(embed)
  
  db.set(`canalw_${message.guild.id}`, channel)
  
}

exports.help = {
  name: 'setwarnchannel',
  aliases: []
}