'use strict';
const api = require('../../../src/lib/api.js');



describe('req response for POST request', () => {
  let postobj = {
    id: 2,
    name: 'note object 2',
    text: 'I am the name object 2'
  }
  test('post sent to end point returns matching data', () => {

    let method = 'POST';
    let path = '/';
    let expected = JSON.stringify(postobj);
    let req.body = expected; //not literal edit this section
    let status = 200;
    router.routes[method][path] (req, res)
    expected(res.status).toEqual(200);
    expected(res.body).toBe(expected);
  });
});