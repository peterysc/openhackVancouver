var express = require('express');
var router = express.Router();

router.get('/example', function (req, res) {
    res.send('hello');
});

module.exports = router;