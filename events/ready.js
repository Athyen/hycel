module.exports = async (client) => {
  client.logger.log(`${client.user.tag} jest gotowy do obsługi ${client.users.cache.size} ${client.users.cache.size === 1 ? 'użytkownika' : 'użytkowników'} na ${client.guilds.cache.size} ${client.guilds.cache.size === 1 ? 'serwerze' : 'serwerach'}.`, 'ready');

  client.user.setActivity(`${client.settings.get('default').prefix}help`, { type: 'PLAYING' });
};
