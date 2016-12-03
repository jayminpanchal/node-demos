/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();
var hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/"}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {'title': 'Validation Testing', success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
});
app.listen(3000);