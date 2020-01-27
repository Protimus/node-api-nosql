var express = require('express');
var cors = require('cors');
var router = express.Router();

var whitelist = ['127.0.0.1']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Got a GET request at /users');
}); 

/* GET users listing with cors blocked. 
router.get('/', cors(corsOptions), function(req, res, next) {
  res.send('Got a GET request at /users/cors');
});*/

/* POST user. */
router.post('/', function (req, res) {
  res.send('Got a POST request at /users');
});

/* PUT user. */
router.put('/', function (req, res) {
  res.send('Got a PUT request at /users');
});

/* DELETE user. */
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /users');
});


module.exports = router, cors;
