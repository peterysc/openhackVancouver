var express = require('express');
var request = require('request');
var router = express.Router();
const http = require('http');




router.get('/:offerId', function (req, res) {
var dataToPost = { "createdDate" : "2015-04-20T17:21:28.588Z", "version" : 1, "description" : "Test TMF Order", "requestedCompletionDate" : "2016-07-14T17:21:28.588Z", "relatedParties" : [{ "role" : "Customer", "reference" : "16475551255" } ], "note":[ { "text":"A free text detailing the note" } ], "orderItems" : [{ "item" : { "description" : "Test TMF Order Item", "orderType" : "ProductOfferingOrder", "action" : "Add", "productOffering" : { "id" : offerId }, "product":{ "productCharacteristic":[ { "name":quantityAmount, "value":"Audi" }, { "name":"brand", "value":"Tesla" } ] }, "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551232" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "relatedParties" : [{ "role" : "Customer", "reference" : "16475551232" } ], "parentOrderItemId" : null, "relatedScItems" : null } } ], "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551231" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "isLocked" : false, "mode" : "INTERACTIVE", "run" : true };

var offerId = request.body.produce.id;
var quantityAmount = request.body.produce.quantity;
var priceEach = request.body.produce.price;

if(quantityAmount > 1)
{
  var totalPrice = quantityAmount*priceEach;
}
else
{
  totalPrice = priceEach;
}

var options = {
  url: 'http://192.176.47.48:27030/rest/OrderManagement/v1/order',
  method: 'POST',
  body: JSON.stringify(dataToPost),
  'headers': {
    'content-type': 'application/json',
    'accept': 'application/json',
    'authorization': 'Basic ZjFlMDc4ODExZDQ4OTJmZjkzZGVhNGU0MWExODFlYTFmNGE3NTQxZDFmMTE1OWJhZjQ6aWVoUUV5SEtpQ3YwQkd4ODc2QnNGQkY0T2ZJbmxqMTJ2TTBkNkphODZJdW45cmgyUUQ='
  }
};
  console.log(options);
    request(options, function (error, response, body) {
      console.log(body);
      if (!error && response.statusCode == 200) {


      }
      res.send(offerId);
      res.send(quantityAmount);
      res.send(totalPrice);
    });
});




module.exports = router;