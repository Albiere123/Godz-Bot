const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if(message.guild.channels.cache.get("ticket")) return message.channel.send("Ja Tem Um Ticket  Aberto!")
    message.guild.channels.create("Ticket")

    message.channel.send("Ticket Criado!")
}