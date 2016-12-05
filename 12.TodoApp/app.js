/**
 * Created by jaymin on 12/5/2016.
 */

var express = require("express");
var todoController = require('./controllers/todoController');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.listen(3000);