const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription("Meu Criador É: **Pɦѳɛɳix F1R3 | Sz ™#5664**")
    .setColor("AQUA")
    message.channel.send(embed)
}