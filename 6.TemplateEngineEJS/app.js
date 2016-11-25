/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");

var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.send(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
    res.send(__dirname + '/contact.html');
});

app.get('/profile/:name', function (req, res) {
    res.render('profile', {person: req.params.name});
});

app.listen(3000);