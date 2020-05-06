const Discord = require('discord.js');
const ms = require("ms");
const config = require('./config.json');

const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Olá meu prefixo é `.`")}
    if(!message.content.startsWith(config.prefix)) return;
    

let args = message.content.split(" ").slice(1);

let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on("ready", () => {
    client.user.setActivity({name: "Use .help Para Ver Meus Comandos!", type: "WATCHING"})
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    let messages = [`Assistindo ${client.users.size} pessoas`,
                    `Estou em ${client.guilds.size} servidores`]


})

client.login(config.token)