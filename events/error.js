module.exports = async (client, error) => {
  client.logger.log(`Error event wysłany przez Discord.js: \n${JSON.stringify(error)}`, 'error');
};
