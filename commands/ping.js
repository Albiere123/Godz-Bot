const Discord =require('discord.js')

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`🏏 Pong!
🔌 📡 Meu Ping é ${client.ws.ping}ms.`)
    message.channel.send(embed)
}