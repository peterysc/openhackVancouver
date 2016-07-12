var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/product', function (req, res, next) {
    res.render('product');
});

router.get('/signin', function (req, res, next) {
    res.render('signin');
});

router.get('/register-user', function (req, res, next) {
    res.render('register-user');
});

module.exports = router;