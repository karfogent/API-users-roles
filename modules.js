const os = require('os')

const {userName: user, sayHi} = require('./test.js');

const name = 'Tommy';

console.log(sayHi(name));

console.log(os.platform(), os.release());

module.export = name;