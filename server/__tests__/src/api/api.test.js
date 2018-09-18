'use strict';

let router = require('../../../src/lib/router');
let app = require('../../../src/app');
let request = require('supertest');

let apiRequest = request('localhost:3000');
let basePath = '/api/v1/notes';

/***********************************
*     POST request tests           *
************************************/
describe('POST /api/v1/notes', () => {
  it('should return a 200 response', (done) => {
    let content = JSON.stringify({
      my: 'object',
    });
    apiRequest
      .post(basePath)
      .send(content)
      .expect(200, content, done);
  });

  it('should return a 400 response and Bad Request if req.body is invalid or absent', (done) => {
    apiRequest
      .post(basePath)
      .send('')
      .expect(400, 'bad request', done);
  });
});

/***********************************
*     GET request tests            *
************************************/
describe('GET /api/v1/notes/:id', () => {
  let path = `${basePath}?id=1`;

  it('should respond with json for the corresponding id', () => {
    return apiRequest
      .get(path)
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        console.log(response.text);
        console.log(response.body);
        expect(response.body.id).toBe('1');
      });
  });
});