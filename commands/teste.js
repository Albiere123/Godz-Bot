const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let member = message.mentions.members.first()
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:semc:706977840234627074> Usuario Banido: ${member.displayName}`)
      .setDescription(`Banido Por: ${message.member.displayName} \nRazão: Isso é um teste`)
      .setColor("AQUA")
    message.channel.send(embed)
       

}