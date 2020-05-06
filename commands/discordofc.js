const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`Clique [Aqui.](https://discord.gg/6h6TB97) Para Ir Ao Link De Convite.`)
    .setColor("AQUA")
    message.channel.send(embed)

}