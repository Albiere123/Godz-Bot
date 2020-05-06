const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    client.user.setActivity({name: "Use .help Para Ver Meus Comandos!", type: "WATCHING"})
    let embed = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription(`Meu Prefix é '.'
    **Para Ver Meus Commandos Escolha Uma Das Catégorias A Baixo.**`)
    .addField("<:semc:706977840234627074> = Administrativos","Entre E Veja Esta Categoria.")
    .addField("<:semb:706983057277714443> = Diversão",  "Entre E Veja Esta Categoria.")
    .addField("<:sema:706981125796528229> = Informação", "Entre E Veja Esta Categoria.")
    .addField("<a:Minecraft:706312241418469426> = Minecraft", "Entre E Veja Esta Categoria")
    .setColor("AQUA");
    

    let embed1 = new Discord.MessageEmbed()
    .setTitle("Administrativos")
    .setColor("AQUA")
    .addField(".Ban", "Commando Usado Para Banir Um Usuario.")
    .addField(".Kick", "Commando Usado Para Expulsar Um Usuario.")
    .addField(".clear", "Commando Usado Para Apagar Mensagens.")
    
    let embed2 = new Discord.MessageEmbed()
    .setTitle("Diversão")
    .addField(".Roleta", "Rode Uma Roleta!")
    .setColor("AQUA");

    let embed3 = new Discord.MessageEmbed()
    .setTitle("Informção")
    .setColor("AQUA")
    .addField(".criador", "Commando Para Ver O Criador do Bot.")
    .addField(".invite", "Link De Invite Do Bot.")
    .addField(".discordofc", "Link Do Discord Oficial Do Bot.")
    .addField(".help", "Commando Para Ver meus Commandos :3")
    .addField(".uptime", "Ver A Quanto tempo Estou Sem Dormir.");

    let embed4 = new Discord.MessageEmbed()
    .setTitle("Minecraft")
    .setColor("AQUA")
    .addField(".mcbody", "Commando Para Ver O Corpo De Uma Skin De Minecraft")
    .addField(".mccombo", "Commando Para Ver A Skin E A cabeça De Uma Skin De Minecraft")
    .addField(".mcskin", "Commando Para Ver Uma Skin De Minecraft");
    message.channel.send("Enviei Sua Ajuda. Olhe O Dm!")
    message.member.send(embed).then(msg => {
        const emoji = ['semc', 'semb', 'sema', 'semd', 'Minecraft'];
        msg.react("706977840234627074")
        msg.react("706983057277714443")
        msg.react("706981125796528229")
        msg.react("706312241418469426")
        msg.react("706984184966545469")
        
    
    
      

      const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id
      const collector = msg.createReactionCollector(filter);
      collector.on("collect", async (collect) => {
          const emojii = collect.emoji.name || collect.emoji.id;
  
          if (emojii === emoji[0]) {
             msg.edit(embed1)
             message.reactions.removeAll(message.author.id)
             
          }
          if (emojii === emoji[1]) {
            msg.edit(embed2)
            message.reactions.removeAll(message.author.id)
         
         }
         if (emojii === emoji[2]) {
          msg.edit(embed3)
          message.reactions.removeAll(message.author.id)
       }
       if(emojii === emoji[4]) {
         msg.edit(embed4)
         message.reactions.removeAll(message.author.id)
       }

       if(emojii == emoji[3]) {
          msg.edit(embed)
          message.reactions.removeAll(message.author.id)
       }
  
    })
      })
    
  } 

   


exports.help = {
    name: 'help'
}