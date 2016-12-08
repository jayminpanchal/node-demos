/**
 * Created by jaymin on 12/6/2016.
 */
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the Database
mongoose.connect('mongodb://username:password@ds151917.mlab.com:51917/todo');

//create schema
var todoSchema = new mongoose.Schema({
    item: String
});

//Create Model
var Todo = mongoose.model('Todo', todoSchema);

var data = [{item: 'Task 1'}, {item: 'Task 2'}, {item: 'Task3'}];
var urlEncoder = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });
    app.post('/todo', urlEncoder, function (req, res) {
        var newTodo = Todo(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
    app.delete('/todo/:item', function (req, res) {
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });

    });
};