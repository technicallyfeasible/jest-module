const Module = require('module');
const path = require('path');


global.MY_GLOBAL = 'this global was passed from the main context';

const file = path.resolve('./module.js');
const mod = new Module(file);
mod.load(file);

mod.exports.callMe();

module.exports = {
  mod,
};
