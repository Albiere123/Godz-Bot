const Discord =require('discord.js')

exports.run = async (client, message, args) => {
    let a = await message.reply("Aguarde um pouco..")
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Ping => ${a.createdTimestamp - message.createdTimestamp}ms.`)
    a.delete()
    message.channel.send(embed)
}