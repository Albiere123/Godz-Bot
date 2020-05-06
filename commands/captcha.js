const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("<:sla:707043622347997185> VOCÊ É UM RÔBO?")
    .setDescription("Bem é muito simples, é só clicar no emoji embaixo que você será registrado automaticamente em nosso servidor. Obrigado e aproveite o RolePlay.")
    message.channel.send(embed).then(msg => {
        const emoji = ['sla']
        msg.react("707043622347997185")

        const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id !== client.user.id
        const collector = msg.createReactionCollector(filter);
        collector.on("collect", async (collect) => {
            const emojii = collect.emoji.name || collect.emoji.id;
    
            if (emojii === emoji[0]) {
                message.member.roles.add("705549329162829845")
               
            }
        
    })
})
    }


