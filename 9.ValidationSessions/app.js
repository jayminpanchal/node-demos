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

app.post('/submit', function (req, res, next) {
    req.check('email', 'Invali email address').isEmail();
    req.check('password', 'Invalid password').isLength({min: 4}).equals(req.body.cpasswor);

    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
    }
    res.redirect("/");
});

app.listen(3000);