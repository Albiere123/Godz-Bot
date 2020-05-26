const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let ping = new Date() - message.createdAt;
  let apiping = Math.floor(ping) + "ms"
  const embed = {
    title: "Pong!",
    description: `📡 | Meu ping é de: \`${client.ws.ping}ms.\`
💻 | Api: \`${apiping}\``
  };

  message.channel.send({ embed });
};

exports.help = {
  name: "ping",
  aliases: []

};