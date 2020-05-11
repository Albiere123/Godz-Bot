const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém(Suas pessoas) antes de shippar!')
    var numero = Math.floor(Math.random() * 100) + 0;
        let embed = new Discord.MessageEmbed()

        .setTitle(`:revolving_hearts:  **Hmm, temos um novo casal aqui?**  :revolving_hearts:`)
        .setDescription(`${message.mentions.users.first().username} e ${message.mentions.users.last().username} tem ${numero}% de chance para dar certo! 7w7`)
        .setColor('#f72929')

        message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ship'
}