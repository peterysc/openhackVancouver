var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('login');
});

/**
 * Sign up page
 */
router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/lobby',
    failureRedirect: '/signup'
}));

/**
 * Login page
 */
router.get('/login', function (req, res, next) {
    res.render('login');
});

// process the login form
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/lobby',
    failureRedirect: '/login'
}));

/**
 * Logout page
 */
router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;