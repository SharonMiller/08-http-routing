'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

// This object will hold our routing table
router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach(method => {
  router.routes[method] = {};

  router[method.toLowerCase()] = function(path, cb) {
    router.routes[method][path] = cb;
  };
});
//router.route is the entrypoint of our server
router.route = (req, res) => {
  return parser(req)
    .then(req => {
      let handler = router.routes[req.method][req.parsed.pathname];



      if(handler){
        return handler(req, res);// this is the API endpoint from the test
      }else{
        let error = { error: '404 Page not found'};
        res.statusCode = '404';
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(error));
        res.end();
      }
    })
    .catch(err => {
      console.error(err, 'im in 500 error');
      res.statusCode = '500';
      res.statusMessage = 'Error while parsing request';
      res.write('Request failed parsing different', req.parsed.pathname);
      res.end();
    });
}