const db = require('quick.db') // Puxando a DataBase. *Instale utilizando: npm i quick.db --save
const ms = require('parse-ms') // Puxando a NPM parse-ms, que iremos utilizar para criar o timeout. *Instale utilizando: npm i parse-ms --save

exports.run = async (client, message, args) => {
    
// Lista funções de um Programador irá fazer
const programmer = ['Assasino', 'Bandido', 'Hacker']
// Lista funções de um Designer
const designer = ['Guindaste', 'Navil', 'Barco']

    let timeout = 1.8e+7 // Definindo um tempo para utilizar o comando, no caso desse, 5 horas (em milisegundos)
    let quantia = Math.floor(Math.random() * 1000) + 400; // Definindo quanto o usuário pode ganhar 
    let trabalho = await db.get(`work_${message.author.id}`); // Puxando da DataBase o 'work', que vai definir que o mesmo trabalhou

    if (trabalho !== null && timeout - (Date.now() - trabalho) > 0) { // Puxando o trabalho e iremos dar o timeout
     let time = ms(timeout - (Date.now() - trabalho)); // Definindo que 'time' será os tempos
      
      message.channel.send(`:x: Faltam **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
   
     } else {
        var emprego = await db.get(`trabaio_${message.author.id}`) // Puxando o 'trabaio', que utilizamos como emprego
        if (emprego === null) { // Caso o 'trabaio' do usuário seja 'null', ou seja, zero, iremos avisar que ele precisa de um emprego
          return message.reply(`para trabalhar, você precisa de um emprego! Utilize \`l!emprego\`.`)
        } else {
          
        } // Caso o usuário seja um Programador, que definimos como Um (1)
        if (emprego === 1) {                                      // Puxando a lista que criamos no início
          message.channel.send(`👮‍♂️  Hoje, Prendeu um **${programmer[Math.floor(Math.random() * programmer.length)]}** e por isso, recebeu: **R$ ${quantia}**`)
          db.add(`money_${message.author.id}`, quantia) // setando a 'quantia' de dinheiro por trabalhar hoje
          db.set(`work_${message.author.id}`, Date.now()) // Setando o timeout que criamos acima, no 'work', salvando na DataBase 
       } // Caso o usuário seja um Programador, que definimos como Dois (2)
        if (emprego === 2) {                                     // Puxando a lista que criamos no início
          message.channel.send(`👨‍🔧 Você Concertou a maquina do **${designer[Math.floor(Math.random() * designer.length)]}** e por isso, recebeu: **R$ ${quantia}**`)
          db.add(`money_${message.author.id}`, quantia) // setando a 'quantia' de dinheiro por trabalhar hoje
          db.set(`work_${message.author.id}`, Date.now()) // Setando o timeout que criamos acima, no 'work', salvando na DataBase
       }
    }
}

exports.help = {
    name: 'trabalhar',
    aliases: ['work']
}