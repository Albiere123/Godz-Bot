const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    if(!['506588141776535582','595415089335500800'].includes(message.author.id)) return;
    client.user.setAvatar(`${args[0]}`)
    let embed = new Discord.MessageEmbed()
    .setTitle('Novo Avatar')
    .setImage(args[0])
    message.channel.send(embed)
}

exports.help = {
    name:'setavatar',
    aliases: []
}