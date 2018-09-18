'use strict';

let router = require('../../../src/lib/router');
let app = require('../../../src/app');
let request = require('supertest');

describe('POST /api/v1/notes', () => {
  it('should return a 200 response', (done) => {
    let content = JSON.stringify({
      my: 'object',
    });
    request('localhost:3000')
      .post('/api/v1/notes')
      .send(content)
      .expect(200, content, done);
  });
});