var express = require('express');
var cors = require('cors');
var UserController = require('../controllers/UserController');
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
router.get('/', UserController.getAll); 

/* GET users listing with cors blocked. 
router.get('/', cors(corsOptions), function(req, res, next) {
  res.send('Got a GET request at /users/cors');
});*/

/* GET user. */
router.get('/:_id', UserController.getById); 

/* POST user. */
router.post('/', UserController.create);

/* PUT user. */
router.put('/:_id', UserController.update);

/* DELETE user. */
router.delete('/:_id', UserController.remove);

module.exports = router, cors;
