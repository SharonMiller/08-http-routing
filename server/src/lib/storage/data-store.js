'use strict';

const memory = require('../storage/memory');
const filesystem = require('../storage/filesystem');

let dataStorageModule = {};

switch (process.env.STORAGE) {
  case 'filesystem':
    dataStorageModule = filesystem;
    break;
  default:
    dataStorageModule = memory;
    break;
}

module.exports = dataStorageModule;