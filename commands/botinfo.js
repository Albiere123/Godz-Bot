const Discord = require('discord.js')


exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("<:bot:707671914625237122> Informações Do Bot")
    .addField("Estatisticas", `🕵️ | Usuarios: \`${client.users.cache.size}\` \n🖥️ | Servidores: \`${client.guilds.cache.size}\` \n📂 | Canais: \`${client.channels.cache.size}\``)
    .addField("Informações", `<:js:710476337017651293>, <:njs:710476338208964648> | Linguagem: [JavaScript](https://javascript.com) Ultilizando [Node.js](https://nodejs.com/pt-br/)
<:djs:710476338469011476> | Livraria: [Discord.js](https://discordjs.com)
<:gl:710476337860575232> | Host: [Glitch](https://glitch.com/)
⏱️ | Ping: \`${client.ws.ping} ms.\`
📅 | Eu Nasci Em: \`14/05/2020 As 15:00\``)
    .addField("Invite/Support", `📝 | [Support](https://godz-bot.glitch.me/)
📲 | [Invite](https://discord.com/oauth2/authorize?=&client_id=690323240379351040&scope=bot&permissions=8)
💡 | [Vote Em Mim!](https://top.gg/bot/690323240379351040)`) 
    .setTimestamp()
    .setThumbnail(client.user.avatarURL())
    .setFooter(message.author.username, message.author.avatarURL())
    //r.users.remove(message.author.id)
    message.channel.send(embed).then(msg => {
        let emoji = ['sla', 'errado']
      msg.react("707043622347997185")
      msg.react("707762832929980486")
      
      const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id
      const coletor = msg.createReactionCollector(filter, {max: 1})
      coletor.on('collect',async (collect) => {
        const emojii = collect.emoji.name || collect.emoji.id;
        if(emojii == emoji[0]) {
          let member = client.channels.cache.get("709967019709300806")
          member.send(`FeedBack: \`Gostei!\` De <@${message.author.id}>`)
          message.channel.send("<:sla:707043622347997185> Enviado FeedBack Do Botinfo Para Meu Criador")
          collect.users.remove(message.author.id)        
        }
        if(emojii == emoji[1]) {
          let member = client.channels.cache.get("709967019709300806")
          collect.users.remove(message.author.id)
          member.send(`FeedBack: \`Não Gostei\` De ${message.author.id}`)
          message.channel.send("<:sla:707043622347997185> Enviado FeedBack Do Botinfo Para MeuCriador")
        } 
      })
    })
}
