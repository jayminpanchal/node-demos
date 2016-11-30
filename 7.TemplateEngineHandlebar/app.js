/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();
var hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/"}));
app.use('/assets', express.static('assets'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {'title': 'Demo Page'});
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(3000);