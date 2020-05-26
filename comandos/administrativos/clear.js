const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let clean = args.slice(0).join(" ")
    if(clean < 2 || clean > 100) return message.channel.send('Coloque Um Número De 2 a 100')
    let embed = new Discord.MessageEmbed()
    .setTitle(':broom: Limpeza')
    .setDescription(`> Foram Limpas ${clean} messagens.`)
    message.channel.bulkDelete(clean)
    message.channel.send(embed)
}

exports.help = {
    name: 'clear',
    aliases: ['limpar']
}