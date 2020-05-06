const Discord = require('discord.js'); 

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Você precisa da permissão \`Gerenciar Mensagens\`.`); 
    let clean = args.slice(0).join(' '); 
    if (clean < 2 || clean > 100) return message.reply(`Escreva um número de: \`2 à 100\`!`)
   
    if (args.length === 0) return message.reply(`Escreva um número de: \`2 à 100\`!`) 
    try { 
        message.channel.bulkDelete(clean) 
        
        let embed = new Discord.MessageEmbed()

        .setTitle(`<:eae:707049296100458556> Limpeza:`)
        .setDescription(`Você limpou um total de \`${clean}\` mensagens..`)
        .setColor('AQUA')

        message.channel.send(embed)
        message.delete()
        
    } catch(e){ 
        console.log(e); 
    }
}

exports.help = { 
    name: 'limpar'
}