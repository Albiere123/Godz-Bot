const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let a = db.get(`bcanal_${message.guild.id}`);
  let b = a.id;

  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Você não tem **permissão** suficiente !");

  let member = message.mentions.members.first();
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("Não Tenho Permissão Para Banir Membros Aqui..");
  if (!member) return message.reply("Por favor mencione um usuário válido !");
  if (!member.bannable)
    return message.channel.send("Eu Não Posso Banir Este Membro...");
  let reason = args.slice(1).join(" ");

  if (!reason) return message.channel.send("Nenhuma razão fornecida");
  let embed = new Discord.MessageEmbed()
    .setTitle("Dejesa Mesmo Banir Este Membro?")
    .setDescription("Reaja Com O Emoji Abaixo Para Banir-lo..");

  let embed1 = new Discord.MessageEmbed()
    .setTitle("Ban")
    .addField("Usuario Banido", member)
    .addField("Motivo", reason)
    .addField("Banido Por", message.author.username)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp();
  message.channel.send(embed).then(msg => {
    let emoji = ["✅"];
    msg.react("✅");

    const filter = (reaction, user) => emoji.includes(reaction.emoji.name) && user.id != client.user.id && user.id == message.author.id;
    const collector = msg.createReactionCollector(filter, { max: 1 });
    collector.on("collect", async collect => {
      const emojii = collect.emoji.name || collect.emoji.includes;
      if ((emojii = emoji[0])) {
        if (!a) {
          msg.edit(embed1);
          member.ban(reason);
        } else {
          message.guild.channels.cache.get(b).send(embed1);
          member.ban(reason);
        }
      }
    });
  });
};

exports.help = {
  name: "ban",
  aliases: ["banir"]
};
