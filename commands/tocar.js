const { MessageEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const pesquisa = require('yt-search');

module.exports.run = async(client, message, args) => {
    if(!message.member.voice.channel){
        return message.channel.send(`Você precisa estar em um canal de voz.`);
    }

    let pes = args.join(' ');
    if(!pes){
        return message.channel.send(`Você precisa inserir o título de uma música.`);
    }

    pesquisa(pes, async (erro, re) => {
        if(erro) console.log(erro);

        const videos = re.videos;
        const pVideo = videos[0];

        //console.log(pVideo);

        const con = await message.member.voice.channel.join();
        const tocar = await con.play(ytdl(pVideo.url, {filter: 'audioonly', quality: "highest"}));

        tocar.on('end', () => {
            message.channel.send(`A música parou!`);
            message.member.voice.channel.leave();
        })

        let embed = new MessageEmbed()
        .setTimestamp()
        .setTitle(`🔊**Música**🔊`)
        .setDescription(`🎵 A música requisitada está tocando!🎵`)
        .addField(`Título:`, pVideo.title, true)
        .addField(`Duração:`, pVideo.duration.timestamp, true)
        .setColor("#36393e")
        .setFooter(`🎈 Pedido por ID: ${message.author.id}🎈`, message.author.avatarURL())

        message.channel.send(embed);

    })

}

exports.config = {
    name: 'tocar',
    aliases: ['play'],
    usage: 'tocar',
    desc: 'Comando de tocar música'
}