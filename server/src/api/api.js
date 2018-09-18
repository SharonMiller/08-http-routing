'use strict';

const router = require('../lib/router.js');

let basePath = '/api/v1/notes';
let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.post(`${basePath}`, (req, res) => {
  // do stuff
  if (req.body === '') {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('bad request');
    res.end();

  } else {
    sendJSON(res, req.body);
  }
});

router.get(`${basePath}`, (req, res) => {
  // do stuff
  let data = { id: req.query.id };
  sendJSON(res, data);
});

router.put('/', (req, res) => {
  // do stuff
});


router.delete('/', (req, res) => {
  // do stuff
});