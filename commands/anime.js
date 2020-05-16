const Discord = require('discord.js')
const ms = require('mal-scraper')
const tl = require ('google-translate-free')

exports.run = async (client, message, args) => {
	if(!args) return message.channel.send("Coloque Um Anime!")
	let a = args.slice("").join(" ")
	let b = await ms.getInfoFromName(a)
  tl(b.synopsis, {from: 'en', to: 'pt'}).then(resp => {
  message.channel.bulkDelete(1) 
    let embed = new Discord.MessageEmbed()
    	.setTitle(b.title)
    	.setThumbnail(b.picture)
    	.addField("Episodios", b.episodes)
    	.addField("Duração Media", b.duration)
    	.addField("Status", b.status)
    	.addField("Classificação", b.score)
    	.addField("Classificação Popularidade", b.popularity)
    	.addField("Anime Top", b.ranked)
      .setDescription('**Sinopse: **' +resp.text)
	
    	message.channel.send(embed)
    
  })
    	
}