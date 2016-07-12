var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('login');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/success',
    failureRedirect: '/fail'
}));

router.post('/signin', passport.authenticate('local-login', {
    successRedirect: '/success',
    failureRedirect: '/fail'
}));

router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;