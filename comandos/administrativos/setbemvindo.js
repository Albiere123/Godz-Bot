const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if(args[0] == 'canal') {
    let a = message.mentions.channels.first()
    db.set(`welcanal_${message.guild.id}`, a)
    let canal = db.get(`welcanal_${message.guild.id}`)
    let cana = `<#${canal.id}>`
    let embed = new Discord.MessageEmbed()
    .setTitle('Novo Canal De Bem Vindo')
    .setDescription(`Novo Canal -> ${cana}`)
    message.channel.send(embed)
  } else if(args[0] == 'descrição' || args[0] == 'descricao') {
    let a = args.slice(1).join(' ')
    db.set(`welDes_${message.guild.id}`, a)
    let messaged = db.get(`welDes_${message.guild.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle('Nova Descrição De Bem Vindo.')
    .setDescription('Nova Descrição -> ' + messaged)
    message.channel.send(embed)
  } else if(args[0] == 'titulo') {
    db.set(`welTitle_${message.guild.id}`)
  let messageT = db.get(`welTitle_${message.guild.id}`)
  let embed = Discord.MessageEmbed()
  .setTitle('Novo Titulo')
    .setDescription(`Novo Titulo -> ${messageT}`)
    message.channel.send(embed)
  }
}

exports.help = {
  name: 'setbemvindo',
  aliases: []
}