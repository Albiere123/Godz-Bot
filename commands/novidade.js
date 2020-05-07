const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let sla = args.slice().join(' ')
    if(!args[0]) return message.reply("Use .anunciar <texto>")
    let canal = message.guild.channels.cache.get("705549349203083345")
    let embed = new Discord.MessageEmbed()
    .setTitle("Novidade Da Vez")
    .addField("Novidade:", `${sla}`)
    canal.send(embed).then(msg => {
        msg.react("👍")
        msg.react("❌")
    })
    canal.send("@everyone")
}