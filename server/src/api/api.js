'use strict';

const api = module.exports = {};

const router = require('../lib/router.js');
const Notes = require('../models/notes.js')





let sendJSON = (res, data) => {
  res.statusCode = '200';
  res.statusMessage = 'OK';
  res.setHeader('Content-type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

let serverError = (res, err) => {
  let error = { error: err };
  res.statusCode = 500;
  console.log('is this before my error???')
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};



router.post('/api/v1/notes', (req, res) => {
  if (typeof req.body !== 'object'){
    res.statusCode = '404';
    res.write(`TypeError: body is not a JSON string`);
    res.end();
  } else {
    let record = new Notes(req.body.title, req.body.content);
    record.save()
    .then(data => sendJSON(res, data))
    .catch(err => serverError(res, err));
  }
});

router.get('/api/v1/notes/:id', (req, res) => {
  if (!req.query.id){
    res.statusCode = '404';
    res.write('TypeError: missing id')
    res.end();
  } else {
    Notes.get(req.query.id)
    .then(data => sendJSON(res, data))
    .catch(err => serverError(res, err));
  }
});

router.delete('/api/v1/notes/:id', (req, res) => {

  if (!req.query.id) {
    res.statusCode = '404';
    res.write(`TypeError: cannot delete resource of blank id`);
    res.end();
  } else {
    Notes.delete(req.query.id)
      .then(res => {
        res.statusCode = '200';
        res.statusMessage = 'OK';
        res.setHeader('Content-type', 'application/json');
        res.write(JSON.stringify(res));
        res.end();
      })
      .catch(err => serverError(res, err));
  }
});