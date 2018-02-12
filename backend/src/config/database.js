const mongose = require('mongoose')

//para tirar a msg de advertencia
mongose.Promise = global.Promise

module.exports = mongose.connect('mongodb://localhost/todo', {useMongoClient: true})