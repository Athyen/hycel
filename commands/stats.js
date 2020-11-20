const { version } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(' D [d], H [h], m [m], s [s]')
  message.channel.send(`= Statystyki =
• Użycie RAM  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime      :: ${duration}
• Użytkownicy :: ${client.users.cache.size.toLocaleString()}
• Serwery     :: ${client.guilds.cache.size.toLocaleString()}
• Kanały      :: ${client.channels.cache.size.toLocaleString()}
• Discord.js  :: v${version}
• Node        :: ${process.version}`, { code: 'asciidoc' })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'User'
}

exports.help = {
  name: 'stats',
  category: 'Różne',
  description: 'Wyświetla statystyki bota.',
  usage: 'stats'
}
