const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let member = message.mentions.users.first()
  
  if(!member) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Avatar")
    .setDescription(`Clique [Aqui](${message.author.avatarURL({size: 1024})}) Para Baixar.`)
    .setImage(message.author.avatarURL())
    message.channel.send(embed)
  }else {
  let embed = new Discord.MessageEmbed()
  .setTitle("Avatar")
  .setDescription(`Clique [Aqui](${member.avatarURL({size: 1024})}) Para Baixar.`)
  .setImage(member.avatarURL())
  message.channel.send(embed)
}
}