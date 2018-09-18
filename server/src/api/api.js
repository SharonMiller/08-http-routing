'use strict';

const router = require('../lib/router.js');

let basePath = '/api/v1';

router.post(`${basePath}/notes`, (req, res) => {
  // do stuff
  res.status = 200;
  res.write(req.body);
  res.end();
});

router.put('/', (req, res) => {
  // do stuff
});

router.get('/', (req, res) => {
  // do stuff
});

router.delete('/', (req, res) => {
  // do stuff
});