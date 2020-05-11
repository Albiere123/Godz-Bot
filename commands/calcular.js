const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    const embedgg = new Discord.MessageEmbed()
  .setTitle(':errado: | Você não pode usar comandos aqui!')
  .setColor('RED')
  .setDescription('\n:lab_atencao: | Você não pode usar comandos aqui, use comandos no chat <#705677616530718722>\n')
  .setTimestamp()
   if (!message.member.hasPermission('ADMINISTRATOR') && message.channel.id !== '705677616530718722') return message.channel.send(embedgg)
    
    const input = args.join(' ')
    if (!input) {
      const embedrr = new Discord.MessageEmbed()
      .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png')
      .setTitle(':errado: | Calculadora - Conta inválida')
      .setColor('#00ffa5')
      .setDescription(`:lab_atencao: | Erro: \n \nNenhuma conta encontrada.\n`)
      .setTimestamp()
      return message.reply(embedrr)
    }

    const question = args.join(' ')
	let answer = Math.evaluate(question)
    try {
      
    } catch (err) {
      const embedr = new Discord.MessageEmbed()
      .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png')
      .setTitle(':errado: | Calculadora - Conta inválida')
      .setColor('#00ffa5')
      .setDescription(`:lab_atencao: | Erro: \n \n${err}\n`)
      .setTimestamp()
      return message.reply(embedr)
    }

    const embed = new Discord.MessageEmbed()
      .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png')
      .setTitle(':mineplaneta: | Calculadora - Resultado')
      .setColor('#00ffa5')
      .setDescription(`:Fornalhaligada: | Conta: \n \n ${question}\n \n:Google: | Resposta: \n \n${answer}\n`)
      .setTimestamp()
    message.channel.send(embed)
  }

