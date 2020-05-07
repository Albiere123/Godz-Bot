const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    const everyone = message.guild.roles.cache.find(e => e.name === "@everyone");
        message.channel.overwritePermissions([
            {
                id: everyone.id,
                allow: ["SEND_MESSAGES"]
            }
        ])
     
        message.reply("o canal foi desbloqueado com sucesso!");
}