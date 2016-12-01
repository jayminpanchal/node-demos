/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();
var hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/"}));
var expressValidator = require('express-validator');
var expressSession = require('express-session');

app.set('view engine', 'hbs');

app.use(expressValidator());
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

app.get('/', function (req, res) {
    res.render('index', {'title': 'Validation Testing', success: false, errors: req.session.errors});
    req.session.errors = null;
});

app.listen(3000);