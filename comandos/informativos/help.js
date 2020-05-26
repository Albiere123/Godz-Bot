const Discord = require('discord.js')
const config = require('../../config.json')
const db = require('quick.db')


exports.run = async (client, message, args) => {
  let prefix = db.get(`prefixo_${message.guild.id}`)
  if(!prefix) prefix = config.prefix
  
    let embed1 = new Discord.MessageEmbed()
    .setTitle('Administrativos')
    .addField(`${prefix}clear`, `Apague Mensagens! [Comandos Alternativos: limpar]`)
    .addField(`${prefix}ban`, `Quer banir alguém? Use-o [Comandos Alternativos: banir]`)
    .addField(`${prefix}dashboard`, `Olhe Meu Painel De Controle [Comandos Alternativos: paineldecontrole]`)
    .addField(`${prefix}setbanchannel`, `Sete O Local Onde Vai Sair Os Ban's`)
    .addField(`${prefix}addemoji`, `Crie Um Emoji! [Comandos Alternativos: adicionaremoji, criaremoji]`)
    .addField(`${prefix}setbemvindo`, `Sete O canal, titulo e etc. Do evento \`guildMemberAdd\``)
    .addField(`${prefix}setwarnchannel`, `Sete O Canal De Warn's`)
    let embed2 = new Discord.MessageEmbed()
    .setTitle('Diversão')
    .addField(`${prefix}slap`, `Quer dar um tapa em alguem? [comandos alternativos: tapa]`)
    .addField(`${prefix}hug`, `Quer dar um abraço em alguem? [comandos alternativos: abraço]`)
    .addField(`${prefix}poke`, `Quer Cutucar alguem? [comandos alternativos: cutucar]`)
  
    

    let embed4 = new Discord.MessageEmbed()
    .setTitle('Informação')
    .addField(`${prefix}ping`, `Veja Meu Ping!`)
    .addField(`${prefix}help`, `Veja Meus Comandos [Comandos Alternativos: ajuda]`)
    .addField(`${prefix}botinfo`, `Veja Minhas Informações [Comandos Alternativos: infobot]`)
    .addField(`${prefix}traduzir`, `Traduza Mensagens!`)
    .addField(`${prefix}userinfo`, `Veja As Informações De Um Usuário [Comandos Alternativos: user]`)
    .addField(`${prefix}serverinfo`, `Veja As Informações De Um Servidor`)
    let embed5 = new Discord.MessageEmbed()
    .setTitle('Jogos')
    .addField(`${prefix}mccombo`, 'Um comando Do Jogo Minecraft Para Ver Sua Skin E Cabeça.')
    .addField(`${prefix}mcbody`, 'Um Comando Do Jogo Minecraft Para Ver Seu Corpo.')
    .addField(`${prefix}mchead`, 'Um Comando Do Jogo Minecraft Para Ver Sua Cabeça.')
    let embed = new Discord.MessageEmbed()
    .setTitle('Help | Ajuda')
    .addField('> 🔨 = Administrativos', 'Reaja Com O Emoji Designado E Abra Esta Categoria..')
    .addField('> 🎉 = Diversão', 'Reaja Com O Emoji Designado E Abra Esta Categoria..')
    .addField('> 🗞️ = Informativos', 'Reaja Com O Emoji Designado E Abra Esta Categoria..')
    .addField('> <:mineplaneta:706312721569808405> = Jogos', 'Reaja Com O Emoji Designado E Abra Esta Categoria..')
    .addField('> 🔙 = Voltar', 'Volte A Página Principal')
    .setThumbnail(client.user.avatarURL())
    message.channel.send(embed).then(msg => {
        let emoji = ['🔨', '🎉', '🎧', '🗞️', '🔙', 'mineplaneta']
        msg.react('🔨')
        msg.react('🎉')
        msg.react('🗞️')
        msg.react('706312721569808405')
         msg.react('🔙')
        const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id && user.id == message.author.id
        const collector = msg.createReactionCollector(filter, {max: 10});
        collector.on(`collect`, async (col) => {
            let emojii = col.emoji.name || col.emoji.id
            if (emojii === emoji[0]) {
                msg.edit(embed1)
                col.users.remove(message.author.id)
                
             }
             if (emojii === emoji[1]) {
               msg.edit(embed2)
               col.users.remove(message.author.id)
            
            }
            
          if(emojii === emoji[4]) {
            msg.edit(embed)
            col.users.remove(message.author.id)
           
          }
   
          if(emojii == emoji[3]) {
             msg.edit(embed4)
             col.users.remove(message.author.id)
             
          }
          if(emojii == emoji[5]) {
            msg.edit(embed5)
            col.users.remove(message.author.id)
          }
        })
    })
}
exports.help = {
    name: 'help',
    aliases: ['ajuda']
}