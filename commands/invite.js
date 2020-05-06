const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`Clique [Aqui.](https://discordapp.com/oauth2/authorize?=&client_id=690323240379351040&scope=bot&permissions=8) Para Entrar No Meu Link De Invite!`)
    .setColor("AQUA")
    message.channel.send(embed)
}