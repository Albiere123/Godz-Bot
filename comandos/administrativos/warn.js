const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  // gogo
  if(!['595415089335500800', '506588141776535582', '697574771092619399'].includes(message.author.id) || message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para usar esse comando!") 
  
  let canal = db.get(`canalw_${message.guild.id}`)
  let user = message.mentions.users.first()
  let motivo = args.slice(1).join(" ")
  
  if(!user) return message.channel.send("Insira um usuário")
  if(!motivo) return message.channel.send("Insira um motivo")
  if(!canal) return message.channel.send("Nenhum canal de warn definido!")
  
  let embed = new Discord.MessageEmbed()
  .setTitle('**⚠ | Warn**')
  .addField('🙇 | Usuário Avisado:', `${user}`)
  .addField('👨 | Avisado Pelo Staff:', `<@${message.author.id}>`) //
  .addField('📜 | Motivo:', `${motivo}`) 
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
  .setTimestamp()
  message.guild.channels.cache.get(canal.id).send(embed)
  message.channel.send("Warn enviado com sucesso")
} 

exports.help = {
  name: 'warn',
  aliases: []
}