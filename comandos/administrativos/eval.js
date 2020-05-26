const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!['506588141776535582', '595415089335500800'].includes(message.author.id)) return;
    
    let code = args.slice(0).join(" ");
    if(!code) return message.channel.send('Coloque um codigo :|')
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          let embed = new Discord.MessageEmbed()
          .setDescription(`:inbox_tray: **ENTRADA**\n\`\`\`js\n${code}\`\`\`\n:outbox_tray: **SAÍDA**\n\`\`\`js\n${ev}\`\`\``)
          .setColor('#00000')
        message.channel.send(embed)
        } catch(err) {
          
          let errorrr = new Discord.MessageEmbed()
          .setDescription(`**ERRO DETECTADO!**\n\`\`\`\n${err}\`\`\``)
          .setColor('RED')
            message.channel.send(errorrr)
        }
  }

exports.help = {
  name: 'eval',
  aliases: []
}