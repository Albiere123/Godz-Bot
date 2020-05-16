const Discord = require('discord.js')
const sp = require('superagent')

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Gerando..")
    let meme = ['https://i.pinimg.com/originals/28/cb/f7/28cbf720d25b6d29648d3f29a17cafaa.jpg',
               'https://static.imagemwhats.com.br/content/assetz/uploads/2019/06/27-Memes-brasileiros-Memes-Memes-Engra%C3%A7ados-cole%C3%A7%C3%A3o-11668.jpg',
                'https://pm1.narvii.com/6456/8bf99386ddbd65a723f329656ace4bcd7d9f5e7b_hq.jpg',
               'https://a.wattpad.com/cover/176595939-288-k744774.jpg',
               'https://cdn.joke4fun.com/media/posts/00000/dvqg7w43j0n2.jpg',
               'https://cdn.joke4fun.com/media/posts/00000/od7jko1xp516.jpg',
               'https://i.pinimg.com/736x/45/09/d3/4509d35609a4f23e72fca7deff205bda.jpg',
               'https://images-ext-2.discordapp.net/external/JLR_qvx4RXxlLL077u9c_ix-R80sh2pUMltk9BpdBpo/https/i.pinimg.com/474x/4c/57/07/4c57079b03c448bf75bdeb1d2790f412.jpg']
    let embed = new Discord.MessageEmbed()
    .setTitle("Meme:")
    .setImage(`${meme[Math.floor(Math.random() * meme.length)]}`)
    msg.delete()
    message.channel.send(embed).then(msg => {
      let emoji = ['sla', 'errado']
      msg.react("707043622347997185")
      msg.react("707762832929980486")
      
      const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id && user.id == message.author.id
      const coletor = msg.createReactionCollector(filter, {max: 1})
      coletor.on('collect',async (collect) => {
        const emojii = collect.emoji.name || collect.emoji.id;
        if(emojii == emoji[0]) {
          let member = client.channels.cache.get("709967019709300806")
          member.send(`FeedBack: \`Gostei!\` De <@${message.author.id}>`)
          message.channel.send("<:sla:707043622347997185> Enviado FeedBack Do Meme Para O Meu Criador.")
          message.reactions.users.remove(message.author.id)          
        }
        if(emojii == emoji[1]) {
          let member = client.channels.cache.get("709967019709300806")
          member.send(`FeedBack: \`Não Gostei!\` De <@${message.author.id}>`)
          message.channel.send("<:sla:707043622347997185> Enviado FeedBack Do Meme Para O Meu Criador.")
        } 
      })
      
    }).catch(err=> {
      console.error(err)
    })
}