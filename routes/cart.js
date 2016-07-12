var express = require('express');
var router = express.Router();

var isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.sendStatus('401');
    res.end();
}

router.get('/email', isLoggedIn, function (req, res) {
    res.send(req.user._id);
    res.end();
});

router.get('/', isLoggedIn, function (req, res) {
    console.log(req.user);
    res.send(req.user);
    res.end();
});

router.post('/', isLoggedIn, function (req, res) {
    console.log(req.user);
    res.send(req.user);
    res.end();
});

module.exports = router;