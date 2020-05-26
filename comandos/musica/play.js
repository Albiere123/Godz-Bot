const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const api = require("yt-api");
const yt = require('yt-search')
const API = new api.Client("AIzaSyBkUMzSIEKv-HlYsln6YYgYDDKn_rZ6Kx4");

exports.run = async(client, message, args) => {
  if(!message.member.voice.channel) return message.channel.send('Entre Em Um Canal De Voz!')
  let a = args.slice(0).join(' ')
  if(!a) return message.channel.send('Coloque Um Titulo..')
  let i = await API.searchForVideo(a)
    let con = await message.member.voice.channel.join()
    let play = await con.play(ytdl(i.url, {filter: 'audioonly', quality: 'highest'}))
    play.on('end', () => {
      message.channel.send('A música parou...')
      message.guild.me.voice.channel.leave()
    })
    let embed = new Discord.MessageEmbed()
    .setTitle('Tocando Agora '+ i.title)
    .setFooter(`Pedido Por: ` +message.author.username, message.author.avatarURL())
    .setURL(i.url)
  message.channel.send(embed)

}
exports.help = {
  name: 'play',
  aliases: ['tocar', 't', 'p']
}