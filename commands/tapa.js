const Discord = require('discord.js')
const sp = require('superagent')

exports.run = async (client, message, args) => {
    let member = message.mentions.members.first();
    if(!member) return message.reply("Mencione Alguém!")
    let msg = await message.channel.send("Gerando..")
    let {body} = await sp

    .get("https://nekos.life/api/v2/img/slap")
    if(!{body}) return message.reply("Tente Novamente..")
    let embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}> Deu um Tapa Em ${member}`)
    .setImage(body.url)
    msg.delete()
    message.channel.send(embed)
}