  
const db = require('quick.db') // Puxando a nossa Database *Instale utilizando: npm i quick.db --save
const ms = require('parse-ms') // Uma npm para definir o tempo (Para instalar: npm i parse-ms)
const Discord = require('discord.js') // puxando a livraria Discord.js

exports.run = async (client, message, args) => {
  
       let timeout = 86400000 // definindo o tempo do daily (No meu caso 24hrs)
       let amount = Math.floor(Math.random() * 1500) + 500; // um sistema randômico do quanto o usuário irá ganhar

        let daily = await db.fetch(`daily_${message.author.id}`); // puxando na database o 'daily'
    
       if (daily !== null && timeout - (Date.now() - daily) > 0) { // pegando o 'daily' e verificando se o timeout expirou
         let time = ms(timeout - (Date.now() - daily)); // definindo os tempos na variável 'time'
           // caso o timeout tenha expirado
           message.reply(`você já Pegou O Diario hoje! Tente novamente em: **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
       } else { // caso não tenha expirado
          
            message.channel.send(`você recebeu: **R$ ${amount}**`)
    
        db.add(`money_${message.author.id}`, amount) // adicionando na database do usuário a quantia que ele ganhou
        db.set(`daily_${message.author.id}`, Date.now()) // adicionando na database do usuário, o daily (o tempo)
        }
    }
exports.help = {
    name: 'daily',
    aliases: ['diário']
}