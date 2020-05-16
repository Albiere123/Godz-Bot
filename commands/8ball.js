const Discord = require('discord.js')
const sp = require('superagent')
const tl = require('google-translate-free')
exports.run = async(client, message, args) => {
  const {body} = await sp
  .get('https://nekos.life/api/v2/8ball')
  if(!{body}) return message.channel.send("Tente Novamente..")
 
tl(`${body.response}`, {from: 'en', to: 'pt'}).then(res => {
    console.log(res.text);
     let a = res.text;
  let embed = new Discord.MessageEmbed()
  .setDescription(`8Ball: ${a}`)
  message.channel.send(embed)
}).catch(err => {
    console.error(err);
})
  
  
}