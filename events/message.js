const config = require("../config.json")
const Discord = require('discord.js')
module.exports = async (client, message) => {
  let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`]
    mention.find(mention => {
    if(message.content === mention) {
        let embed = new Discord.MessageEmbed()
    .setTitle('Mini Ajuda')
    .setDescription(`Meu Prefixo é \`${process.env.PREFIX}\`, Use \`${process.env.PREFIX}ajuda\` Para Ver Meus Comandos!`)
    message.channel.send(embed)
    }
  });
  if(message.author.bot) return;
  if(message.channel.type === 'DM') return;
 
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (command) {
    command.run(client, message, args); //Não muda aqui ok? é bot tem duas glitch para ele kkk (database e a outra é essa kkk)
  }
}
