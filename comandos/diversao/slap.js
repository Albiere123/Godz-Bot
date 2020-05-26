const Discord = require('discord.js')
const sp = require('superagent')

exports.run = async (client, message, args) => {
    let member = message.mentions.users.first()
    if(!member) return message.channel.send('Mencione Alguem..')
    const {body} = await sp
    .get('https://nekos.life/api/v2/img/slap')
    let embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}> Deu Um Tapa Em ${member}`)
    .setImage(body.url)
    message.channel.send(embed)
}


exports.help = {
    name: 'slap',
    aliases: ['tapa']
}