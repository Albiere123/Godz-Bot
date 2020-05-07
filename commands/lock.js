const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.channel.overwritePermissions([
    {
        id: everyone.id,
        deny: ["SEND_MESSAGES"]
    }
])

message.reply("o canal foi bloqueado com sucesso!");
}

