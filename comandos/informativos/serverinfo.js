const { MessageEmbed }= require("discord.js");
    const moment = require("moment");
    moment.locale('pt-BR');
    exports.run = async (client, message, args) => {
    let membros = message.guild.members.cache.size
    let e = new MessageEmbed()
    .setColor("AQUA")
    .setTitle(` Informações do servidor.`, client.user.displayAvatarURL)
    .addField(`📃 → **__Dono:__**`, ` <@${message.guild.ownerID}>`, true)
    .addField(`📃 → **__Nome do servidor:__**`, `\`${message.guild.name}\``, true)
    .addField(`📃 → **__ID do servidor:__**`, ` \`${message.guild.id}\``, true)
    .addField(`📃 → **__Criado em:__**`, `\`${moment(message.guild.createdAt).format('L')}\``, true)
    .addField(`📃 → **__Quantidade de membros:__**`, ` \`${membros}\``, true)
    .addField(`📃 → **__Região do servidor:__**`,  `\`${message.guild.region}\``.replace("`brazil`", ":flag_br: `Brazil`"), true)
    .setThumbnail(message.guild.iconURL())
   
    message.channel.send(e);
    }
    
exports.help = {
  name: 'serverinfo',
  aliases: []
}