'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

// This object will hold our routing table
router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach(method => {
  router.routes[method] = {};

  router[method.toLowerCase()] = function(path, cb) {
    router.routes[method][path] = cb; //this is
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
        //send 404 like in the catch bwlow 
      }
    })
    .catch(err => {
      console.error(err);
      res.statusCode = 500;
      res.statusMessage = 'Error while parsing request';
      res.write('Request failed parsing', req.parsed.pathname);
      res.end();
    });
}