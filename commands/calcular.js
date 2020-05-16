const Discord = require('discord.js')
const mathjs = require('mathjs')

exports.run = async (client, message, args) => {
  let a = args.slice().join(" ")
    const embedgg = new Discord.MessageEmbed()
  .setTitle('Calculadora:')
  .setDescription('Resultado: ' + mathjs.evaluate(a))
  .setTimestamp()
    .setThumbnail('https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/11/calculadoras-online-150x150.png')
  message.channel.send(embedgg)
  }

