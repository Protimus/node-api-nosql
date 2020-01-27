var debug = require('debug')('api:model');

function UserModel(mongo) {
    this.mongo = mongo;
}
    
    UserModel.prototype.find = function(query, callback){
        this.mongo.collection('users').find(query, callback);
    };

    findOne(_id, callback){
        var query = { _id: this.mongo.ObjectId(_id) };
        this.mongo.collection('users').findOne(query, callback);
    };

    create(data, callback){
        this.mongo.collection('users').insert(data, callback);
    }

    update(_id, callback){
        var query = { _id: this.mongo.ObjectId(_id) };
        this.mongo.collection('users').insert(query, callback);
    };

    remove(_id, callback){
        var query = { _id: this.mongo.ObjectId(_id) };
        this.mongo.collection('users').remove(query, callback);
    }

module.exports = new UserModel(mongo);