const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports.run = async(client, message, args) => {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    const region = {
      brazil: ':flag_br: Brazil'
    }

    const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setThumbnail(message.guild.iconURL())
      .addField(`Estatisticas`, `**🎫 | Nome: \`${message.guild.name}\`**
**📧 | id**: \`${message.guild.id}\`
**👑 Dono(a)**: ${message.guild.owner}
**🌏 Região**: ${region[message.guild.region]}
**💻 Canais**: \`${message.guild.channels.cache.size}\`
**💼 Cargos**: \`${message.guild.roles.cache.size}\``)
      .setAuthor('🔍 Informações do servidor')
      .addField('Membros', `**😀 | Humanos**: \`${message.guild.members.cache.filter(member => !member.user.bot).size}\`
**🤖 | Bots**: \`${message.guild.members.cache.filter(member => member.user.bot).size}\``)

      .addField('Datas', `**📅 | Criado em**: \`${moment(message.guild.createdAt).format('L')}\`
**📆 |Você entrou**: \`${moment(message.member.joinedAt).format('L')}\``)

      .setFooter('')
      .setTimestamp()

    message.channel.send(embed)
   
}
  