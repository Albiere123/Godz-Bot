const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém(Suas pessoas) antes de shippar!')
    var numero = Math.floor(Math.random() * 100) + 0;
    let gif = ['https://3.bp.blogspot.com/-aIudQs8QDi0/VSv1CrZhXlI/AAAAAAAAA14/dwthdzNydyM/s1600/Saito_x_louise3.gif',
    'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
    'https://em.wattpad.com/ea6d0c9e1478321c337b0fc6f7d48c9523be84f5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49585f7a6c636953695f364742413d3d2d3638312e313565333661343964383164393536353336333936363333393938332e676966']    
    
    
    let embed = new Discord.MessageEmbed()

        .setTitle(`:revolving_hearts:  **Hmm, temos um novo casal aqui?**  :revolving_hearts:`)
        .setDescription(`${message.mentions.users.first().username} e ${message.mentions.users.last().username} tem ${numero}% de chance para dar certo! 7w7`)
        .setImage(gif[Math.floor(Math.random() * gif.length)])
        .setColor('#f72929')

        message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ship'
}