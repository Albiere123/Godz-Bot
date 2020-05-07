const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    let member = message.mentions.members.first()
    if(!member) {
        let embed  = new Discord.messageembed()
        .setTitle(`${message.author.username}`)
        .addField("ID", `${message.author.id}`)
        .addField("tag", `${message.author.tag}`)
        message.channel.send(embed)
    }
    
}