var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/:parameter', function (req, res) {

  var produc = req.params.parameter;
  console.log(produc);

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/'+produc+'?expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(preparingResponse));
    }
  });

});

module.exports = router;


