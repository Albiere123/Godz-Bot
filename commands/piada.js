const Discord =require('discord.js')


exports.run = async (client, message, args) => {
	let pi = [
	'Qual É O Rei Dos Queijos? \n_Resposta: `REIQUEIJÂO`_',
	'Você Conheçe A Piada Do Pônei? \n_Resposta: `PO NEI EU`_',
	'Por Que Napoleão Era Sempre Chamado Nas Festas Da França? \n_Resposta: `PORQUE ELE ERA BOM NA PARTY_`',
	'Por Que A Aranha É O Animal Mais Carente Do Mundo? \n_Resposta: `Porque Ela É Um ARACNEEDYOU`_',
	'Por Que O Pinheiro Não Se Perde na Floresta? \n_Resposta: `Por Que Ele Tem Uma Pinha(MAPINHA)`_',
	'Sabe Qual É A Piada Do Pintinho Caipira? \n`_Resposta: `PIR.`_',
	'Um Caipira Chega Na Casa De Um Amigo Que Está Vendo TV E Pergunta: \n- E Aí, Firme? \nO Outro Fala: \n- Não, Futebor.']
	let embed = new Discord.MessageEmbed()
	.setTitle("Piada")
	.setDescription(`${pi[Math.floor(Math.random() * pi.length)]}`)
	message.channel.send(embed)
}