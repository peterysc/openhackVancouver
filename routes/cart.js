var express = require('express');
var router = express.Router();
var cloudant = require('../config/cloudant.js');
var dbAuth = cloudant.dbAuth;

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
    dbAuth.get(req.user._id, function(err, result) {
    		res.setHeader('Content-Type', 'application/json');
    	 	res.send(JSON.stringify(result.cart));
         	res.end();
        });
});

router.post('/', isLoggedIn, function (req, res) {
	dbAuth.get(req.user._id, function(err, result) {
			result.cart = req.body;
			dbAuth.insert(result, result._id, function(err, body, header) {
			  if (err) {
			    res.sendStatus('500');
			    res.end();
			  } else {
			  	// res.sendStatus('200');
			  	// res.end();
			  	res.redirect('/cart-order');
			  }
			});
	    });
});

module.exports = router;