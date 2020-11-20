exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find((l) => l.level === level).name;
  message.reply(`Twój poziom uprawnień to: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'User',
};

exports.help = {
  name: 'mylevel',
  category: 'Różne',
  description: 'Wyświetla Twój poziom uprawnień.',
  usage: 'mylevel',
};
