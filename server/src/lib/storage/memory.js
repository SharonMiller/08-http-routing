'use strict';

const storage = module.exports = {};

const database = {};

storage.get = id => {
  return new Promise((resolve, reject) => {
    if (!database.id) {
      reject('ERROR: id not found');
    } resolve(database[id]);
  });
};

storage.save = data => {

  return new Promise((resolve, reject) => {
    if (data.id) {
      database[data.id] = data; //executer
      resolve(database[data.id]);
    } else {
      reject('ERROR: no id provided on data');
    }
  });
};

storage.delete = id => {

  return new Promise((resolve, reject) => {
    if (!database[id]) {reject(`${id} not found`);} 
    else {  
      delete database[id];
      resolve(`resource: ${id} has been deleted`);
    }
  });
};