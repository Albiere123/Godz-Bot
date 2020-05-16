const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Olá meu prefixo é `h!`")}
    if(!message.content.startsWith(config.prefix)) return;
    

let args = message.content.split(" ").slice(1);

let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on("ready", () => {
    client.user.setActivity({name: "Use g!help Para Ver Meus Comandos!", type: "WATCHING"})
    console.log(`Bot foi iniciado com, ${client.users.cache.size} usuários, ${client.guilds.cache.size} servidores, ${client.channels.cache.size} canais.`)

    let messages = [{name: `Em ` + client.guilds.cache.size + ` Servidores`, type: 'PLAYING'}, 
        {name: `Com ` +client.users.cache.size+ ` Membros`, type: 'PLAYING'},
        {name: 'Use g!help Use h!help Para Ver Meus Comandos!', type: 'LISTENING'},
        {name: 'Meu Criador: </Faker>#5664', type: 'STREAMING', url: 'https://twitch.tv/olimpiioo'},
        {name: 'Use h!botinfo Para Ver Minhas Informações!', type: "WATCHING"}]
  let a = messages[Math.floor(Math.random() * messages.length)]
  function setStatus() {
    client.user.setActivity(a)
  }
  setStatus()
  setInterval(() => setStatus(), 150)
})
console.log('')

client.login(config.token)