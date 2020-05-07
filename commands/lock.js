const Discord = require('discord.js');
 
exports.run = async (bot, message, args) => {
 
   if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.reply("você não tem permissão para isso.");
 
   if (!message.guild.me.hasPermission(["MANAGE_CHANNELS"])) return message.reply("eu não possuo permissão para isso.");
 
 
   const everyone = message.guild.roles.cache.find(e => e.name === "@everyone");
       message.channel.overwritePermissions([
           {
               id: everyone.id,
               deny: ["SEND_MESSAGES"]
           }
       ])
 
       message.reply("o canal foi bloqueado com sucesso!");
 
   }