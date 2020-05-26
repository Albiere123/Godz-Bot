const db = require("quick.db");

exports.run = async (client, message, args) => {
  let trabalho = db.get(`trabaio_${message.author.id}`);
  if (trabalho == null)
    return message.channel.send("Você Não Tem Um Trabalho..");
  db.set(`trabaio_${message.author.id}`, null);
  message.channel.send("Você Se Demitiu... Escolha Outro Emprego Com l!emprego!");
};

exports.help = {
  name: "demitir",
  aliases: []
};
