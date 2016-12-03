/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();
var hbs = require('express-handlebars');
app.use('/bootstrap', express.static(__dirname + '/bower_components/bootstrap/dist/')); // redirect bootstrap JS
app.use('/jquery', express.static(__dirname + '/bower_components/jquery/dist/')); // redirect JS jQuery
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/"}));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {'title': 'Bootstrap Demo'});
});
app.listen(3000);