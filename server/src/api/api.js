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

let sendError = (res, code, msg) => {
  res.statusCode = code;
  res.statusMessage = msg;
  // res.setHeader('Content-Type', 'application/json');
  res.write(msg);
  res.end();
};

router.post(`${basePath}`, (req, res) => {
  // do stuff
  if (req.body === '') {
    // res.statusCode = 400;
    // res.statusMessage = 'Bad Request';
    // res.write('bad request');
    // res.end();

    sendError(res, 400, 'Bad Request');

  } else {
    sendJSON(res, req.body);
  }
});

router.get(`${basePath}`, (req, res) => {
  // do stuff
  if (!req.query.id) {
    sendError(res, 400, 'Bad Request');

  } else {
    let data = { id: req.query.id };
    sendJSON(res, data);

  }
});

router.put(`${basePath}`, (req, res) => {
  // do stuff
  if (!req.query.id) {
    sendError(res, 400, 'Bad Request');

  } else {
    let data = { id: req.query.id };
    router.post(`${basePath}`, (req, res) => {
      sendJSON(res, data);
    });
  }
});


router.delete(`${basePath}`, (req, res) => {
  // do stuff
  if (typeof (JSON.parse(req.body)) !== 'object') {
    sendError(res, 404, 'ERROR: request body is not JSON');

  } else if (!req.query.id) {
    sendError(res, 400, 'Bad Request, unable to delete resource of undefinied ID');

  } else {
    let data = res;
    sendJSON(res, data);
  }
});