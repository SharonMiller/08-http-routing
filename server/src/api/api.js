'use strict';

const router = require('../lib/router.js');

let basePath = '/api/v1';

router.post(`${basePath}/notes`, (req, res) => {
  // do stuff
  if (req.body === '') {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('bad request');
    res.end();

  } else {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify(req.body));
    res.end();
  }
});

router.get('/', (req, res) => {
  // do stuff
});

router.put('/', (req, res) => {
  // do stuff
});


router.delete('/', (req, res) => {
  // do stuff
});