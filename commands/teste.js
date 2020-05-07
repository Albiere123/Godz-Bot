const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     client.user.setActivity({name: 'Estou Em ' + client.guilds.cache.size + ' Servidores!', type: 'wWATCHING'})

       

}