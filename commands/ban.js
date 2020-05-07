const Discord = require('discord.js')



module.exports.run = async (client, message, args) => {

    client.user.setActivity("Estou Em " + client.guilds.size + " Servidores.")

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")

    let member = message.mentions.members.first()

    if(!member)

      return message.reply("Por favor mencione um usuário válido !")

    if(!member.bannable)

      return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")

    let reason = args.slice(1).join(' ')

    if(!reason) return message.channel.send("Nenhuma razão fornecida")

    

      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))


      let embed = new Discord.MessageEmbed()
      .setTitle("Você Dejesa Banir Este Membro?")
      .setDescription("Para Banir-lo Só Reajir a <:sla:707043622347997185>")
      .setColor("AQUA");
      
  
      let embed1 = new Discord.MessageEmbed()
      .setTitle(`Usuario Banido: ${member.displayName}`)
      .setDescription(`Banido Por: ${message.member.displayName} \nRazão: ${reason}`)
      .setColor("AQUA")
      message.channel.send(embed).then(msg => {
          const emoji = ['sla'];
          msg.react("707043622347997185")
  
        const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id
        const collector = msg.createReactionCollector(filter);
        collector.on("collect", async (collect) => {
            const emojii = collect.emoji.name || collect.emoji.id;
    
            if (emojii === emoji[0]) {
               msg.edit(embed1)
               member.ban(reason)
               message.reactions.removeAll(message.author.id)
               
            }
          
    
      })
        })
      
    } 