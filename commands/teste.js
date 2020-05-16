const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     client.user.setActivity({name: 'Estou Em ' + client.guilds.cache.size + ' Servidores!', type: 'WATCHING'})
  let a  = message.mentions.members.first().displayName + message.mentions.members.last().displayName
  message.channel.send(`${a}`)

       

}