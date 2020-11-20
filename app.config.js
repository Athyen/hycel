module.exports = {
  apps: [{
    name: 'discord-bot',
    script: './index.js',
    watch: true,
    ignore_watch: ['node_modules', 'data', 'config.json'],
    log_date_format: 'DD.MM.YY HH:mm:ss',
    args: [
      '--color'
    ]
  }]
}
