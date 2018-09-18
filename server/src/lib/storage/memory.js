'use strict';

const storage = module.exports = {};

const database = {};

storage.get = id => {

  return new Promise((resolve, reject) => {
    if (!database[id]) { reject(`ERROR: ${id} not found`); }

    resolve(database[id]);
  });
};

storage.save = data => {

  return new Promise((resolve, reject) => {
    if (!data.id) {
      reject('ERROR: No ID provided on data');

    } else {
      database[data.id] = data;
      resolve(database[data.id]);
    }
  });
};