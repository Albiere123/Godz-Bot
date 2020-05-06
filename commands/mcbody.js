const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const reason = args.slice(0).join(' ')
client.user.setActivity({name: `Com ${client.users.size} Usuarios.`, type: "WATCHING"})
      const embedrr = new Discord.MessageEmbed()
      .setTitle('<a:errado:706332824466227260> | MCBody - Erro')
      .setColor('#00ffa5')
      .setDescription(`<a:lab_atencao:706312165606293616> | Erro: \n \nVocê precisa citar um nick de minecraft.\n`)
      .setTimestamp()
      if (reason.length < 1) return message.reply(embedrr)

      const embed = new Discord.MessageEmbed()
        .setTitle(`<a:Minecraft:706312241418469426> Corpo De: ${args[0]}`)
        .setImage(`https://mc-heads.net/player/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
        .setColor('AQUA')
      message.channel.send(embed)
}