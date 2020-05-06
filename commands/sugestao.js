const Discord = require('discord.js');

module.exports.run = async(client, message, args, guild) => {
    let canal = client.channels.cache.get("705549346686369823");
    message.channel.send("Sugestão Enviada.");
    let embed = new Discord.MessageEmbed()
      .setTitle('Sugestões Para Mim ;3')
      .addField("**Sugestão:**" , "__" + args + "__")
      .setColor("AQUA")
      .setFooter(message.member.displayName, message.member.user.displayAvatarURL)
      .setTimestamp(message.createdTimestamp)
      canal.send(embed).catch(console.error);
      
}

module.exports.help = {
    name: 'sugestao'
}