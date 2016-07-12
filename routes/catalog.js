var express = require('express');
var request = require('request');
var router = express.Router();

var options = {
  url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=',
  headers: {
    'Authorization': 'Basic xxxx'
  }
};

router.get('/', function (req, res) {
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage. 
      }

      res.send("hello");
    });
});

module.exports = router;