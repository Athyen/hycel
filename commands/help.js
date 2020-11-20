exports.run = (client, message, args, level) => {
  if (!args[0]) {
    const myCommands = message.guild ? client.commands.filter((cmd) => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter((cmd) => client.levelCache[cmd.conf.permLevel] <= level && cmd.conf.guildOnly !== true);

    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = '';
    let output = `= Lista komend =\n[Użyj ${message.settings.prefix}help <nazwakomendy> dla szczegółowego opisu danej komendy]\n`;
    // eslint-disable-next-line no-nested-ternary
    const sorted = myCommands.array().sort((p, c) => (p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1));
    sorted.forEach((c) => {
      const cat = c.help.category;
      if (currentCategory !== cat) {
        output += `\u200b\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${message.settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
    });
    message.channel.send(output, { code: 'asciidoc', split: { char: '\u200b' } });
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nSposób użycia:: ${command.help.usage}\nAliasy:: ${command.conf.aliases.length === 0 ? 'brak aliasów' : command.conf.aliases.join(', ')}\n= ${command.help.name} =`, { code: 'asciidoc' });
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 'User',
};

exports.help = {
  name: 'help',
  category: 'Systemowe',
  description: 'Pokazuje wszystkie komendy dotępne dla Twojego poziomu uprawnień.',
  usage: 'help [komenda]',
};
