/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var app = express();
var expressValidator = require('express-validator');
var expressSession = require('express-session');


app.useMa(expressValidator());
app.use(expressSession({secret: 'max', saveUnitialized: false, resave:false}));
app.listen(3000);