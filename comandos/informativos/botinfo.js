const Discord = require('discord.js')
const os = require('os')
exports.run = async (client, message, args) => {
  let memberCount = 0;
        client.users.cache.forEach((member) => {
         if (!member.bot) memberCount++;
           });
      
  let dias = 0;
    let semanas = 0;
 
     let uptime = ``
     let totalSegundos = (client.uptime / 1000);
     let horas = Math.floor(totalSegundos / 3600);
     totalSegundos %= 3600;
     let minutos = Math.floor(totalSegundos / 60);
     let segundos = Math.floor(totalSegundos % 60);
 
     if (horas > 23) {
         dias = dias + 1;
         horas = 0;
     }
 
     if (dias == 7) {
     dias = 0;
     semanas = semanas + 1;
     }
 
     if (semanas > 0){
         uptime += `${semanas} semanas, `;
     }
 
     if (minutos > 60){
         minutos = 0;
     }
  
     uptime += `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  let embed = new Discord.MessageEmbed()
  .setTitle('Informações Sobre Mim')
  .addField('> 🛠️ | Estatisticas', `🌎 » Servidores: \`${client.guilds.cache.size}\`
👮 » Membros: \`${memberCount}\`
🖼️ » Canais: \`${client.channels.cache.size}\`
📥 » Comandos: \`${client.commands.size + 4}\``)
  .addField('> 📃 | Informações', `<:js:711588448577781763> » Linguagem: [JavaScript](https://javascript.com/) com <:nodejs:711588449035091979> [Node.js](https://nodejs.org)
<:Djs:711588449848786974> » Livraria: [Discord.js](https://discord.js.org/) 
🗄️ » DataBase: [Quick.db](https://www.npmjs.com/package/quick.db).
<:Glitch:711588449240744017> » Host: [Glitch](https://glitch.com)
🤖 » Versão: \`Beta: 1.0.3\`
📡 » Ping: \`${client.ws.ping}ms.\`
📅 » Criado Em: \`15/05/2020 As 14:48\`
😴 » Online Á: \`${uptime}\``)
  .addField('> 🔗 | Vps', `<:levels1:713561052188639274> » Memoria Usada: \`${(process.memoryUsage().heapUsed / 1024 / 1024 /2).toFixed(2)}%\`
<:ram:713558778037141535> » Memoria Ram: \`${(os.totalmem() / 1024 / 1024).toFixed(2)} Mb\`
<:cpu:713557718425927741> » CPU: \`${os.cpus().map((i) => `${i.model}`)[0]}\`
<:linux:713557222986219600> » Plataforma: \`${os.platform()}\`
<:levels:713560743710031895> » Memoria Restante: \`${(os.freemem() /1024 /1024).toFixed(2)} Mb\`
`)
  .addField('> 📱 | Redes', `📌 » [Invite](https://discord.com/oauth2/authorize?=&client_id=711580606949228614&scope=bot&permissions=8)
🛡️ » [Suporte](https://discord.gg/6h6TB97)
💡 » [Vote Em Mim](https://discordbotlist.com/bots/leonard)`)
  .addField('> :hammer: | Developers', `\`</Faker>#5664\`,\n\`Santini ⌬#9518\`,\n\`Élder#2583\``)
  .setFooter('Reaja Com O Emoji Abaixo Para Ver Em Quais Servidores Estou :D', message.author.avatarURL())
  .setTimestamp()
  .setThumbnail(client.user.avatarURL())
  
  let embed1 = new Discord.MessageEmbed()
  .setTitle('Informações Sobre Mim')
  .addField(`Servidores(${client.guilds.cache.size})`, `\`${client.guilds.cache.map(a => a.name).join("`, `")}\``)
  .setThumbnail(client.user.avatarURL())
  message.channel.send(embed).then(msg => {
    let emoji = ['bt']
    msg.react('713495063539351723')
    
    const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id && user.id == message.author.id
    const collector = msg.createReactionCollector(filter)
    collector.on('collect', async (col) => {
      let emojii = col.emoji.name || col.emoji.id
      if(emojii == emoji[0]) {
        msg.edit(embed1)
        col.users.remove(message.author.id)
        col.users.remove(client.user.id)
      }
    })
  })
}

exports.help = {
  name: 'botinfo',
  aliases: ['infobot']
}