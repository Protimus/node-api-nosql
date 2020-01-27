var express = require('express');
var cors = require('cors');
var router = express.Router();
var mongo = require('../db/mongo');
var UserModel = require('../models/UserModel')(mongo);
var UserController = require('../controllers/userController')(UserModel);

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
router.get('/', UserController.getAll.bind(UserController)); 

/* GET users listing with cors blocked. 
router.get('/', cors(corsOptions), function(req, res, next) {
  res.send('Got a GET request at /users/cors');
});*/

/* GET user. */
router.get('/:_id', UserController.getById.bind(UserController)); 

/* POST user. */
router.post('/', UserController.create.bind(UserController));

/* PUT user. */
router.put('/:_id', UserController.update.bind(UserController));

/* DELETE user. */
router.delete('/:_id', UserController.remove.bind(UserController));

module.exports = router, cors;
