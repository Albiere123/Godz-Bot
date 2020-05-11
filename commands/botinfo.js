const Discord = require('discord.js')


exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setTitle("<:bot:707671914625237122> Informações Do Bot")
    .setDescription("Olá me chamo Godz, Sou um simples bot de discord com o entuito de deixar mais facil as coisas nos servidores de discord.")
    .addField("Tenho", `${client.users.cache.size} Amigos.`)
    .addField("Estou Em", `${client.guilds.cache.size} Servidores.`)
    .addField("Criador", "<@506588141776535582>")
    .addField("WebSite", "Clique [Aqui.](http://godz-bot.glitch.me/) Para Entrar")
    .setThumbnail("https://cdn.discordapp.com/avatars/690323240379351040/be54c38c4827fb89fab2dcb49c9b9b64.png")
    .addField("Discord Official || Support", `Clique [Aqui.](https://discord.gg/6h6TB97) Para Entrar.`)
    .addField("Invite", "Clique [Aqui.](https://discord.com/oauth2/authorize?=&client_id=690323240379351040&scope=bot&permissions=8) Para Entrar.")
    .addField("Vote Em Mim" , "Clique [Aqui.](https://top.gg/bot/690323240379351040) Para Entrar.")
    .setTimestamp()
    //r.users.remove(message.author.id)
    
    message.channel.send(embed).then(msg => {
        msg.react("")
    })
}
