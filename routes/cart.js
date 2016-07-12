var express = require('express');
var router = express.Router();

var isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.sendStatus('401');
    res.end();
}

router.get('/', isLoggedIn, function (req, res) {
    console.log(req.user);
    res.end();
});

module.exports = router;