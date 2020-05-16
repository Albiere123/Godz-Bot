const Discord = require('discord.js')
const tl = require('google-translate-free')
exports.run = async(client, message, args) => {
  
  let a = args.slice(3).join(" ")
  tl(`${a}`, {from: args[0], to: args[1]}).then(res => {
    console.log(res.text);
     let a = res.text;
  let embed = new Discord.MessageEmbed()
  .setDescription('Traduzido: '+ a)
  message.channel.send(embed)
}).catch(err => {
    console.error(err);
})
}
