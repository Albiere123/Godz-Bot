const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let member = message.mentions.members.first()
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} Deu Um Tapa Em ${member.nickname}`)
    message.reply(embed)
       

}