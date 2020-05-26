const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = async (client, message, args) => {

    //função acharNick
    function acharNome(nome,guilda){
        if (nome == '' || !nome) return null;
        nome = nome.toLowerCase()
           var a =guilda.members.filter(a => (a.displayName.toLowerCase().indexOf(nome) !=-1 || (nome.indexOf(a.displayName.toLowerCase()) !=-1) && a.displayName.length >= nome.length) || (a.user.username.toLowerCase().indexOf(nome) !=-1 || (nome.indexOf(a.user.username.toLowerCase()) !=-1) && a.user.username.length >= nome.length))
           a = a.sort((a,b) => a.displayName.length -b.displayName.length)
           return  !a.first()? null : a.first()
}

  

let mention = message.mentions.users.first() || client.users.cache.get(args.join(' ')) || acharNome(args.join(' '), message.guild) || message.author;
let bbuser = mention.user || mention;
let member= message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) || acharNome(args.join(' '), message.guild) || message.author);
  if(bbuser.presence.status === "online") status = "<:on:708547722864754748>"
  if(bbuser.presence.status === "dnd") status = "<:naop:708546824201306172>"
  if(bbuser.presence.status === "idle") status = "<:aus:708547012399857664>"
  if(bbuser.presence.status === "stream") status = "<:stream:708547543331766272>"
  if(bbuser.presence.status === "offline") status = "<:off:708547192406802483>"
  
    let embed = new Discord.MessageEmbed()

    .setTitle(`**${bbuser.tag}**`)
    .addField("**📃 ¦ ID:**", ` \`${bbuser.id}\``)
    .addField("**📃 ¦ Apelido:**", ` \`${bbuser.nickname ? `${bbuser.nickname}` : "`Nenhum`"}\``, true)
    .addField("**📃 ¦ Jogando:**", ` ${bbuser.presence.game ? `\`${bbuser.presence.game.name}\`` : "`Nada`"}`, true)
    .addField("**📃 ¦ Conta criada desde:**", ` \`${moment().diff(bbuser.createdAt, "days")} dias\``, true)
    .addField("**📃 ¦ Status**", `${status}`)
    .addField("**📃 ¦ Entrou No Servidor Em:**", ` \`${moment(bbuser.joinedAt).format('L')}\``, true)
    .addField("**📃 ¦ Cargos:**",  `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **,** ") || "Não possui cargos"}`,       true     )
    .setThumbnail(bbuser.avatarURL())
    .setColor("AQUA")
    message.channel.send(embed);
}

exports.help = {
  name: 'userinfo',
  aliases: ['user']
}