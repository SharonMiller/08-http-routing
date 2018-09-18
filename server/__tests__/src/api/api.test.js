'use strict';
// const api = require('../../../src/lib/api.js');
let router = require('../../../src/lib/router');
let app = require('../../../src/app.js');
let request = require('supertest');

describe('req response for POST request', () => {
  let postObj = JSON.stringify({
    id: 2,
    name: 'note object 2',
    text: 'I am the name object 2'
  });
  test('post sent to end point returns matching data', (done) => {
    request('http://localhost:3000')
      .post('/api/v1/notes')
      .send(postObj)
      .expect(200, postObj, done);
  });
  test('post sent to end point returns matching data', (done) => {
    request('http://localhost:3000')
      .post('/api/v1/notes')
      .send()
      .expect(400, done);
  });
});