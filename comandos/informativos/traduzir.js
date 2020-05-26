const Discord = require('discord.js')
const tr = require('google-translate-free')

exports.run = async (client, message, args) => {
  let a = args.slice(2).join(' ')
  if(!args[0] || !args[1] || !args[2]) return message.channel.send('Use l!traduzir corretamente.. Exemplo `l!traduzir pt en Olá`')
  tr(a, {from: args[0], to: args[1]} ).then(resp => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Tradutor')
    .addField('De: ' + args[0] + ', Para: ' + args[1], `Resposta » ${resp.text}`)
    message.channel.send(embed)
  })
}
exports.help = {
  name: 'traduzir',
  aliases: []
}