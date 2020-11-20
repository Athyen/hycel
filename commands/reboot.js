exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  await message.channel.send(`${client.user.username} restartuje się...`);
  await Promise.all(client.commands.map((cmd) => client.unloadCommand(cmd)));
  process.exit(0);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Bot Admin',
};

exports.help = {
  name: 'reboot',
  category: 'Systemowe',
  description: 'Restartuje bota.',
  usage: 'reboot',
};
