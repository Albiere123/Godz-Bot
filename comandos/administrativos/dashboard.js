const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let bcanal = db.get(`bcanal_${message.guild.id}`)
  let bcanal2 = null
  if(!bcanal) {
    bcanal2 = 'Nenhum Canal Setado!'
  } else {
    bcanal2 = `<#${bcanal.id}>`
  }
  let wcanal = db.get(`canalw_${message.guild.id}`)
  let wcanal2 = null
  if(!wcanal) {
    wcanal2 = 'Nenhum Canal Setado!'
  } else {
    wcanal2 = `<#${wcanal.id}>`
  }
  let welcanal = db.get(`welcanal_${message.guild.id}`)
  let welcanal2 = null
  if(!welcanal) {
    welcanal2 = 'Nenhum Canal Setado!'
  } else {
    welcanal2 = `<#${welcanal.id}>`
  }

  let embed = new Discord.MessageEmbed()
  .setTitle('Painel De Controle Do ' + message.guild.name)
  .addField('Canal De Banimentos', `${bcanal2}`, true)
  .addField('Canal De Warn\'s', `${wcanal2}`, true)
  .addField('Canal De Bem Vindo', `${welcanal2}`, true)
  .setThumbnail(message.guild.iconURL())
  message.channel.send(embed)
}

exports.help = {
  name: 'dashboard',
  aliases: ['paineldecontrole']
}