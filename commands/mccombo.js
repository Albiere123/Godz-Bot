const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const reason = args.slice(0).join(' ')
      const embedrr = new Discord.MessageEmbed()
      .setTitle('<a:errado:706332824466227260> | MCCombo - Erro')
      .setColor('#00ffa5')
      .setDescription(`<a:lab_atencao:706312165606293616> | Erro: \n \nVocê precisa citar um nick de minecraft.\n`)
      .setTimestamp()
      if (reason.length < 1) return message.reply(embedrr)

      const embed = new Discord.MessageEmbed()
        .setTitle(`<a:Minecraft:706312241418469426> Skin + Cabeça: ${args[0]}`)
        .setImage(`https://mc-heads.net/combo/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
        .setColor('AQUA')
      message.channel.send(embed)

}