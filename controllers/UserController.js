var model = require('debug')('api:controller');

function UserController(UserModel) {
    this.model = UserModel;
}

UserController.prototype.getAll = function(request, response, next){
    this.model.find({},function(err, data){ 
        if(err){
            return next(err);
        } 
        response.json(data);
        //response.send('You have get all users');
    });
};

UserController.prototype.getById = function(request, response, next){
    var _id = request.params._id;
    this.model.findOne(_id, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
        //response.send('You have get the user with ID: ' + _id);
    });
};
    
UserController.prototype.create = function(request, response, next){
    var body = request.body;
    this.model.create(body, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
        //response.send('You have created a new user');
    })
};
    
UserController.prototype.update = function(request, response, next){
    var _id = request.params._id,
    body = request.body;
    this.model.update(_id, body, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
        //response.send('You have updated the user with ID: ' + _id);
    })
};
    
UserController.prototype.remove = function(request, response, next){
    var _id = request.params._id;
    this.model.remove(_id, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
        //response.send('You have deleted the user with ID: ' + _id);
    });
};

module.exports = function(UserModel){
    return new UserController(UserModel);
};