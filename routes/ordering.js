var express = require('express');
var request = require('request');
var router = express.Router();
const http = require('http');
var nodemailer = require('nodemailer');

router.post('/placeOrder', function(req,res)
{
  console.log('hi im here');
  var receivedList = [{'id': 'psOpenFarmOrange' , 'quantity' : '1' , 'price': '7.99'},{'id': 'psOpenFarmMilk' , 'quantity': '3' , 'price': '3.99'},{'id': 'psOpenFarmEgg' , 'quantity': '2' , 'price': '5.00'}];

  var offerId;
  var quantityAmount;
  var priceEach;
  var middleTotalPrice = 0;
  var realTotalPriceInclusive = 0;
  var maxSize = receivedList.length; 
  console.log(maxSize);
  var getIds = []
  var getQuantities = [];
  var getPrice = [];

  for (var i=0; i < maxSize; i++)
  {
    console.log(receivedList[i].id);
    console.log(receivedList[i].quantity);
    console.log(receivedList[i].price);
    offerId = receivedList[i].id;
    quantityAmount = parseFloat(receivedList[i].quantity);
    priceEach = parseFloat(receivedList[i].price);

router.get('/:offerId', function (req, res) {
var dataToPost = { "createdDate" : "2015-04-20T17:21:28.588Z", "version" : 1, "description" : "Test TMF Order", "requestedCompletionDate" : "2016-07-14T17:21:28.588Z", "relatedParties" : [{ "role" : "Customer", "reference" : "16475551255" } ], "note":[ { "text":"A free text detailing the note" } ], "orderItems" : [{ "item" : { "description" : "Test TMF Order Item", "orderType" : "ProductOfferingOrder", "action" : "Add", "productOffering" : { "id" : offerId }, "product":{ "productCharacteristic":[ { "name":quantityAmount, "value":"Audi" }, { "name":"brand", "value":"Tesla" } ] }, "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551232" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "relatedParties" : [{ "role" : "Customer", "reference" : "16475551232" } ], "parentOrderItemId" : null, "relatedScItems" : null } } ], "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551231" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "isLocked" : false, "mode" : "INTERACTIVE", "run" : true };


    getIds[i] = offerId;
    getQuantities[i] = quantityAmount;
    if(quantityAmount > 1)
    {
      var quanVal = quantityAmount*priceEach;
      console.log(quanVal);
      middleTotalPrice += quanVal;
      getPrice[i] = middleTotalPrice;
    }
    else
    {
      getPrice[i] = priceEach;
    }
  }      
  var dataToPost = { "createdDate" : "2015-04-20T17:21:28.588Z", "version" : 1, "description" : "Test TMF Order", "requestedCompletionDate" : "2016-07-14T17:21:28.588Z", "relatedParties" : [{ "role" : "Customer", "reference" : "16475551255" } ], "note":[ { "text":"A free text detailing the note" } ], "orderItems" : [{ "item" : { "description" : "Test TMF Order Item", "orderType" : "ProductOfferingOrder", "action" : "Add", "productOffering" : { "id" : offerId }, "product":{ "productCharacteristic":[ { "name":quantityAmount, "value":"Audi" }, { "name":"brand", "value":"Tesla" } ] }, "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551232" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "relatedParties" : [{ "role" : "Customer", "reference" : "16475551232" } ], "parentOrderItemId" : null, "relatedScItems" : null } } ], "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551231" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "isLocked" : false, "mode" : "INTERACTIVE", "run" : true };

  var options = 
  {
    url: 'http://192.176.47.48:27030/rest/OrderManagement/v1/order',
    method: 'POST',
    body: dataToPost,
    'headers': 
    {
      'content-type': 'application/json',
      'accept': 'application/json',
      'authorization': 'Basic ZjFlMDc4ODExZDQ4OTJmZjkzZGVhNGU0MWExODFlYTFmNGE3NTQxZDFmMTE1OWJhZjQ6aWVoUUV5SEtpQ3YwQkd4ODc2QnNGQkY0T2ZJbmxqMTJ2TTBkNkphODZJdW45cmgyUUQ='
    }
  }
  for(var j = 0; j < maxSize; j++)
  {
    console.log((j+1) + ". " + getIds[j]);
    realTotalPriceInclusive = realTotalPriceInclusive + getPrice[j];
    console.log(realTotalPriceInclusive);
  }
  realTotalPriceInclusive *=1.14
  console.log(realTotalPriceInclusive);
  console.log("Total cost is : $" + realTotalPriceInclusive+ "CAD including 14% tax!");
  request(options, function (error, response, body) 
  {
    if (!error && response.statusCode == 200) 
    {

    }
    
    var result = 
    {
      'offerId': getIds,
      'quantityAmount': getQuantities,
      'totalPrice':realTotalPriceInclusive
    }

    res.send(JSON.stringify(result));
    
  });
});

router.get('/orderSummary', function (req, res) 
{
  //var totalPrice = 0;
  var receivedList = [{'id': 'psOpenFarmMilk' , 'quantity' : '1' , 'price': '7.99'},{'id': 'psOpenFarmOrange' , 'quantity': '3' , 'price': '3.99'},{'id': 'psOpenFarmEgg' , 'quantity': '2' , 'price': '5.00'}];
  //var receivedList = JSON.parse(body);
  var offerId;
  var quantityAmount;
  var priceEach;
  var middleTotalPrice = 0;
  var realTotalPriceInclusive = 0;
  var maxSize = receivedList.length; 
  console.log(maxSize);
  var getIds = []
  var getQuantities = [];
  var getPrice = [];
  var returnDetail = [];

  //var receivedBody = req.body;

  //var middleTotalPrice = 0;
  //var realTotalPriceInclusive = 0;
  for (var i=0; i < maxSize; i++)
  {
    
    offerId = receivedList[i].id;
    quantityAmount = parseFloat(receivedList[i].quantity);
    priceEach = parseFloat(receivedList[i].price);

    var dataToPost = { "createdDate" : "2015-04-20T17:21:28.588Z", "version" : 1, "description" : "Test TMF Order", "requestedCompletionDate" : "2016-07-14T17:21:28.588Z", "relatedParties" : [{ "role" : "Customer", "reference" : "16475551255" } ], "note":[ { "text":"A free text detailing the note" } ], "orderItems" : [{ "item" : { "description" : "Test TMF Order Item", "orderType" : "ProductOfferingOrder", "action" : "Add", "productOffering" : { "id" : offerId }, "product":{ "productCharacteristic":[ { "name":quantityAmount, "value":"Audi" }, { "name":"brand", "value":"Tesla" } ] }, "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551232" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "relatedParties" : [{ "role" : "Customer", "reference" : "16475551232" } ], "parentOrderItemId" : null, "relatedScItems" : null } } ], "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551231" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "isLocked" : false, "mode" : "INTERACTIVE", "run" : true };

    var options = 
    {
      url: 'http://192.176.47.48:27030/rest/OrderManagement/v1/order',
      method: 'POST',
      body: JSON.stringify(dataToPost),
      'headers': 
      {
       'content-type': 'application/json',
       'accept': 'application/json',
       'authorization': 'Basic ZjFlMDc4ODExZDQ4OTJmZjkzZGVhNGU0MWExODFlYTFmNGE3NTQxZDFmMTE1OWJhZjQ6aWVoUUV5SEtpQ3YwQkd4ODc2QnNGQkY0T2ZJbmxqMTJ2TTBkNkphODZJdW45cmgyUUQ='
      }
    }
    //console.log(body);

    getIds[i] = offerId;
    getQuantities[i] = quantityAmount;

    //returnDetail[i] = body;
    if(quantityAmount > 1)
    {
      middleTotalPrice += quantityAmount*priceEach;
      getPrice[i] = middleTotalPrice;
    }
    else
    {
      getPrice[i] = priceEach;
    }
  }
  

  for(var l = 0; l<maxSize; l++)
  {
    realTotalPriceInclusive += getPrice[l];
  }

  realTotalPriceInclusive *= 1.14;

  for(var n = 0; n<maxSize; n++)
  {
    console.log((n+1) + ". " + getIds[n]);
    
  }
  
  request(options, function (error, response, body) 
  {

    if (!error && response.statusCode == 200) 
    {  
    }
    
    var result = 
    {
      'offerId': getIds,
      'quantityAmount': getQuantities,
      'totalPrice': realTotalPriceInclusive
    };
    sendEmail(result);
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  });
});

function sendEmail(result){
      var receivedList = [{'id': 'psOpenFarmMilk' , 'quantity' : '1' , 'price': '7.99'},{'id': 'psOpenFarmOrange' , 'quantity': '3' , 'price': '3.99'},{'id': 'psOpenFarmEgg' , 'quantity': '2' , 'price': '5.00'}];
    //var receivedList = JSON.parse(body);
    var offerId;
    var quantityAmount;
    var priceEach;
    var middleTotalPrice = 0;
    var realTotalPriceInclusive = 0;
    var maxSize = receivedList.length; 
    console.log(maxSize);
    var getIds = []
    var getQuantities = [];
    var getPrice = [];
    var returnDetail = [];

  //var receivedBody = req.body;

  //var middleTotalPrice = 0;
  //var realTotalPriceInclusive = 0;
  for (var i=0; i < maxSize; i++)
  {
    
    console.log(receivedList[i].id);
    console.log(receivedList[i].quantity);
    console.log(receivedList[i].price);
    offerId = receivedList[i].id;
    quantityAmount = parseFloat(receivedList[i].quantity);
    priceEach = parseFloat(receivedList[i].price);

    var dataToPost = { "createdDate" : "2015-04-20T17:21:28.588Z", "version" : 1, "description" : "Test TMF Order", "requestedCompletionDate" : "2016-07-14T17:21:28.588Z", "relatedParties" : [{ "role" : "Customer", "reference" : "16475551255" } ], "note":[ { "text":"A free text detailing the note" } ], "orderItems" : [{ "item" : { "description" : "Test TMF Order Item", "orderType" : "ProductOfferingOrder", "action" : "Add", "productOffering" : { "id" : offerId }, "product":{ "productCharacteristic":[ { "name":quantityAmount, "value":"Audi" }, { "name":"brand", "value":"Tesla" } ] }, "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551232" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "relatedParties" : [{ "role" : "Customer", "reference" : "16475551232" } ], "parentOrderItemId" : null, "relatedScItems" : null } } ], "relatedEntities" : [{ "type" : "CustomerAccount", "name" : "CustomerAccountId", "reference" : "16475551231" }, { "type" : "Place", "name" : "PlaceId", "reference" : "16475551231" } ], "isLocked" : false, "mode" : "INTERACTIVE", "run" : true };
    getIds[i] = offerId;
    getQuantities[i] = quantityAmount;

    //returnDetail[i] = body;
    if(quantityAmount > 1)
    {
      middleTotalPrice += quantityAmount*priceEach;
      getPrice[i] = middleTotalPrice;
    }
    else
    {
      getPrice[i] = priceEach;
    }
  }
  

  for(var l = 0; l<maxSize; l++)
  {
    realTotalPriceInclusive += getPrice[l];
  }

  realTotalPriceInclusive *= 1.14;
  var transporter = nodemailer.createTransport({
  service:'Hotmail',
  auth: {
    user: 'cpen391sender@outlook.com',
    pass: 'jasonisgod1'
  }
});

var options = {
    from: '"Fred Foo 👥" <cpen391sender@outlook.com>', // sender address
    to: 'peterysc@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Your package has been delivered to 2550 Wesbrook Mall \n' // plaintext body
}

for(var i = 0; i<maxSize; i++){
  var msg = "Your Offer ID: " + getIds[i] + " " + getQuantities[i] + "\n";
  options.text+= msg;
}

var msg2 = "Your total charge: " + realTotalPriceInclusive;
//options.text += msg;
options.text += msg2;

transporter.sendMail(options, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      //res.sendStatus(200);
  });


}
