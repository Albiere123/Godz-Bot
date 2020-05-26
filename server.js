const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const fs = require('fs')
const { readdirSync } = require("fs");

fs.readdir("./comandos/", (err, files) => {
  const load = dirs => {
    if (err) console.error(err);
    let arquivojs = readdirSync(`./comandos/${dirs}/`).filter(f => f.split(".").pop() === "js");
    arquivojs.forEach((f, i) => {
      let props = require(`./comandos/${dirs}/${f}`);
      console.log(`Comando ${f} iniciou com sucesso`);
      client.commands.set(props.help.name, props);
    });
    arquivojs.forEach((f, i) => {
      let props = require(`./comandos/${dirs}/${f}`);
      console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
     });
    }
  ['informativos', 'administrativos', 'diversao', 'economia', 'jogos', 'musica'].forEach(x => load(x))
  });
  
const evtFiles = readdirSync("./events/");
console.log("log", `Carregando o total de ${evtFiles.length} eventos`);
evtFiles.forEach(f => {
  const eventName = f.split(".")[0];
  const event = require(`./events/${f}`);

  client.on(eventName, event.bind(null, client));
});

client.on('ready', () => {
    console.log(`O Bot Iniciou Com ${client.users.cache.size} Membros/Bots, ${client.guilds.cache.size} Servidores, ${client.channels.cache.size} Canais.`)
  let a = [
    {name: 'Use l!help para ver meus comandos!', type: 'WATCHING'},
    {name: 'Use l!botinfo Para Ver Minhas Informações', type: 'WATCHING'},
    {name: `Com ${client.commands.size} Comandos!`, type: 'PLAYING'},
    {name: `Com ${client.guilds.cache.size} Servidores!`, type: 'PLAYING'},
    {name: `Com ${client.users.cache.size} Membros`, type: 'PLAYING'}
  ]
  let b = a[Math.floor(Math.random() * a.length)]
  function setStatus() {
   client.user.setActivity(b)
  } client.user.setStatus('dnd')
  setStatus()
  setInterval(() => setStatus(), 150)
  client.user.setStatus('dnd').catch(console.error);
  setInterval(() => client.user.setStatus('dnd'), 150)
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();
client.login(config.token)