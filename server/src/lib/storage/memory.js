'use strict';

const storage = module.exports = {};

const database = {};

storage.save = data => {

  return Promise((resolve, reject) => {
    if (data.id) {
      database[data.id] = data; //executer
      resolve(database[data.id]);
    }else {
      reject('ERROR: no id provided on data');
    }
  });
};