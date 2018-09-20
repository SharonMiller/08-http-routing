'use strict';

const uuid = require('uuid/v1');
const storage = require('../lib/storage/data-store.js');

class Notes {
  constructor(title, content) {
    this.id = uuid();
    this.createdOn = this.lastUpdated = new Date();
    this.title = title;
    this.content = content;
  }
  save() {
    return storage.save(this);
  //put it where it goes when storage is created

  }
  static get(getid) {
    return storage.get(getid);
  }

  static delete(getid, res) {
    return storage.delete(getid, res);
  }
}


module.exports = Notes;