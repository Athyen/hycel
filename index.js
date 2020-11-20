/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-nested-ternary */
const Discord = require('discord.js');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);
const Enmap = require('enmap');

const client = new Discord.Client();

client.config = require('./config.js');

client.logger = require('./modules/logger');

require('./modules/functions.js')(client);

client.commands = new Enmap();
client.aliases = new Enmap();

client.settings = new Enmap({ name: 'settings' });

const init = async () => {
  const commandFiles = await readdir('./commands/');
  client.logger.log(`Ładuję ${commandFiles.length} ${commandFiles.length === 1 ? 'komendę' : commandFiles.length > 1 && commandFiles.length < 5 ? 'komendy' : 'komend'}.`);
  commandFiles.forEach((f) => {
    if (!f.endsWith('.js')) return;
    const response = client.loadCommand(f);
    // eslint-disable-next-line no-console
    if (response) console.log(response);
  });

  const eventFiles = await readdir('./events/');
  client.logger.log(`Ładuję ${eventFiles.length} ${commandFiles.length === 1 ? 'event' : commandFiles.length > 1 && commandFiles.length < 5 ? 'eventy' : 'eventów'}.`);
  eventFiles.forEach((file) => {
    const eventName = file.split('.')[0];
    client.logger.log(`Ładuję event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });

  client.levelCache = {};
  for (const permLevel of client.config.permLevels) {
    const thisLevel = permLevel;
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  client.login(client.config.token);
};

init();
