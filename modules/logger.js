/* eslint-disable no-console */
const chalk = require('chalk');

exports.log = (content, type = 'log') => {
  switch (type) {
    case 'log': {
      return console.log(`${chalk.bgBlue(type.toUpperCase())} ${content} `);
    }
    case 'warn': {
      return console.log(`${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
    }
    case 'error': {
      return console.log(`${chalk.bgRed(type.toUpperCase())} ${content} `);
    }
    case 'debug': {
      return console.log(`${chalk.green(type.toUpperCase())} ${content} `);
    }
    case 'cmd': {
      return console.log(`${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
    }
    case 'ready': {
      return console.log(`${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
    }
    default: throw new TypeError('Typ logerra musi być jednym z poniższych:\nwarn, debug, log, ready, cmd, error.');
  }
};

exports.error = (...args) => this.log(...args, 'error');

exports.warn = (...args) => this.log(...args, 'warn');

exports.debug = (...args) => this.log(...args, 'debug');

exports.cmd = (...args) => this.log(...args, 'cmd');
