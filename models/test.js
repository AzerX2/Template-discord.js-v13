const mongo = require('mongoose')

const Schema = new mongo.Schema({
    mot: String
});

module.exports = mongo.model('test', Schema);