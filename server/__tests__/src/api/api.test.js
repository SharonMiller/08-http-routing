'use strict';
// const api = require('../../../src/lib/api.js');
let router = require('../../../src/lib/router');
let app = require('../../../src/app.js');
let request = require('supertest');


describe('req response for GET', () => {
  test('send empty GET request body get 404', (done) => {
    request('http://localhost:3000')
      .get('/api/v1/notes')
      .send('')
      .expect(404, done);
  });
  test('should respond with json object for the requested id', () => {
    let path = 'api/v1/notes/?id=1'
    request('http://localhost:3000')
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
describe('delete should delete file', () => {
  test('delete should delete file by id', () => {
    let path = 'api/v1/notes/?id=1'
    request('http://localhost:3000')
      .delete(path)
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        console.log(response.text);
        console.log(response.body);
        expect(response.body.id).toBe('1');
      });
  });
});

// describe('req response for POST request', () => {
//   test('post sent to end point returns matching data', (done) => {
//     let postObj = JSON.stringify({
//       name: 'note object 2',
//       text: 'I am the name object 2'
//     });
//     request('http://localhost:3000')
//       .post('/api/v1/notes')
//       .send(postObj)
//       .expect(typeof object);
//   });
// });

// let method = 'POST';
//     let path = '/api/v1/notes';
//     let localRequest = 
//     let expected = JSON.stringify(postobj);
//     let req.body = expected; //not literal edit this section
//     let status = 200;
//     router.routes[method][path] (req, res)
//     expected(res.status).toEqual(200);
//     expected(res.body).toBe(expected);