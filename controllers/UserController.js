class UserController {
    getAll(request, response, next){
        response.send('get all users');
    }

    getById(request, response, next){
        response.send('get specific user by id');
    }
    
    create(request, response, next){
        response.send('create a new user');
    }
    
    update(request, response, next){
        response.send('edit a specific user');
    }
    
    remove(request, response, next){
        response.send('delete a specific user');
    }
}

module.exports = new UserController();