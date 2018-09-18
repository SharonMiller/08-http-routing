'use strict';

let router = require('../../../src/lib/router');
let app = require('../../../src/app');
let request = require('supertest');

describe('POST /api/v1/notes', () => {
  let apiRequest = request('localhost:3000');
  let path = '/api/v1/notes';
  it('should return a 200 response', (done) => {
    let content = JSON.stringify({
      my: 'object',
    });
    apiRequest
      .post(path)
      .send(content)
      .expect(200, content, done);
  });

  it('should return a 400 response and Bad Request if req.body is invalid or absent', (done) => {
    apiRequest
      .post(path)
      .send('')
      .expect(400, 'bad request', done);
  });
});