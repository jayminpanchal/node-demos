/**
 * Created by jaymin on 12/6/2016.
 */
var data = [{item: 'Task 1'}, {item: 'Task 2'}, {item: 'Task3'}];
module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render(todo, {todos: data});
    });
    app.post('/todo', function (req, res) {

    });
    app.delete('/todo', function (req, res) {

    });
};