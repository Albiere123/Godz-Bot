const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setTitle("Informações Do Bot")
    .setDescription("Olá me chamo Godz, Sou um simples bot de discord com o entuito de deixar mais facil as coisas nos servidores de discord.")
    .addField("Criador", "Pɦѳɛɳix F1R3 | Sz ™#5664")
    .addField("WebSite", "Clique [Aqui.](http://godz-bot.glitch.me/) Para Entrar")
    .setThumbnail("https://cdn.discordapp.com/avatars/690323240379351040/be54c38c4827fb89fab2dcb49c9b9b64.png")
    .addField("Discord Official", `Clique [Aqui.](https://discord.gg/6h6TB97) Para Entrar.`)
    
    message.channel.send(embed)
}
