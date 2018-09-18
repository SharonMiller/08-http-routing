'use strict';

const router = require('../lib/router.js');
const notes = require('../models/notes.js');
const api = module.exports = {};

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(req.body));
  res.end();
};

let serverError = (res, err) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'appliation/json');
  res.write(JSON.stringify(error));
  res.end();
};


router.post('/api/v1/notes', (req, res) => {
  let record = new Notes(req.body.title, req.body.content);
  record.save()
    .then(data => sendJSON(req, data))
    .catch(err => serverError(res, err));
});

// move status 200 here add 400 above
// if (typeOf req.body !== 'object')
// POST request
// pass data as stringifed JSON in the body of a POST request
// return a 200 response with the POST'd JSON as the content
// (Prove that you got the JSON from the POST)

//router(get/)callback