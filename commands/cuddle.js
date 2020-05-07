const Discord = require('discord.js')
const sp = require('superagent')

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Gerando..")
    let {body} = await sp
    .get('https://nekos.life/api/v2/img/cuddle')
    if(!{body}) return message.reply("Tente Novamente..")
    let member = message.mentions.members.first();
    if(!member) return message.channel.send("Mencione Alguém!")
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.member.displayName} Deu um Abraço Em ${member.displayName}`)
    .setImage(body.url)
    msg.delete()
    message.channel.send(embed)
}