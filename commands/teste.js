const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(";-;")
    message.channel.send(embed).then(msg => {
        let a = ['sla']
        msg.react("706312241418469426")
        
        const filter = (reaction, user) => emoji.includes(reaction.name) && user.id == client.user.id
        const collector = msg.createReactionCollector(filter) 
        collector.on("collect", async (collect) => {
            const emojii = collect.emoji.name || collect.emoji.id
            if(emojii == a[0]) {

            }
        })
    })

}