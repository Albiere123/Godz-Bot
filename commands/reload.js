exports.run = (client, message, args) => {
    let user = message.author;
    if (user.id !== '506588141776535582') {
      return message.channel.send("Desculpe, só meu criador pode dar reload em mim.");
    }
    
    if (args.length === 0) return message.channel.send("Use: `(.)reload <command>`");
    
    try {
      delete require.cache[require.resolve(`./${args[0]}`)];
    } catch (e) {
      return message.channel.send(`Command not found: **${args[0]}**`);
    }
    
    message.channel.send(`Reloaded command: **${args[0]}**`);
}