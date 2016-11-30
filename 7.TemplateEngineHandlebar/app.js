/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();
var hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout'}));
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    //res.send(__dirname + '/index.html');
    res.render('index'); //Direct passing arguement
});

app.get('/contact', function (req, res) {
    //res.send(__dirname + '/contact.html');
    res.render('contact'); //Direct passing arguement
});

app.listen(3000);