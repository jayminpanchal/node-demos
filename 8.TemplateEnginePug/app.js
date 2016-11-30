/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();

app.use('/assets', express.static('assets'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {'title': 'Demo Page', 'message': 'welcome to PugJs'});
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(3000);