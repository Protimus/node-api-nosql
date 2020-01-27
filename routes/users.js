var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Got a GET request at /users');
});

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


module.exports = router;
