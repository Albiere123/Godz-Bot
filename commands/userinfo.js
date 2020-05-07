const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    let member = message.mentions.members.first()
    if(!member) {
        let embed  = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .addField("ID", `${message.author.id}`)
        .addField("tag", `${message.author.tag}`)
        .setThumbnail(message.author.displayavatarURL)
        message.channel.send(embed)
    }
    
}