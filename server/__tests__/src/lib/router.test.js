'use strict';

let router = require('../../../src/lib/router.js');

describe('Router', () => {
  it('registers routes of multiple methods', () => {
    router.get('/', () => true);
    router.put('/', () => true);
    router.post('/', () => true);

    expect(router.routes.GET['/']).toBeDefined();
    expect(router.routes.PUT['/']).toBeDefined();
    expect(router.routes.POST['/']).toBeDefined();

  });

  it('can create multiple routes on the same method', () => {
    router.routes.GET = {};
    router.get('/a', () => true);
    router.get('/b', () => true);
    router.get('/c', () => true);
    expect(Object.keys(router.routes.GET).length).toEqual(3);
  });

  it('should return 404 status for routes that have not been registered', () => {
    let req = {
      method: 'GET',
      url: '/bad/path',
      body: 'request body',
    };
    let res = {
      write: jest.fn(),
      end: jest.fn(),
    };
    let expected = '404';

    router.route(req, res)
      .then((req, res) => {
        expect(res.status).toBe(expected);
      });
  });
});