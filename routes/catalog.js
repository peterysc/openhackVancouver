var express = require('express');
var request = require('request');
var router = express.Router();

// router.get('/spec', function (req, res) {
//   request(optionsSpec, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // console.log(body); // Show the HTML for the Google homepage.
//       var preparingResponse = JSON.parse(body);
//       // dont need href

//       var item;
//       for(item in preparingResponse){
//         delete preparingResponse[item].href;
//         var img = preparingResponse[item].versions[0].characteristics[7].versions[0].value;

//       }

//       for(var i =0; i <preparingResponse.length; i++){
//         var img = preparingResponse[i].versions[0].characteristics[7].versions[0].value;

//       }
//       var eggImg = preparingResponse[0].versions[0].characteristics[7].versions[0].value;
//       // var milkImg = preparingResponse[1].versions[0].characteristics[7].versions[0].value;

//       res.setHeader('Content-Type', 'application/json');
//       res.send(JSON.stringify({"img" : img}));

//     }
//   });
// });

function getEggInfo(req,res){

  var optionsSpec = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarm',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/?project=projectOpenFarm&expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {

    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);
      var name = preparingResponse[0].versions[0].name;
      var description = preparingResponse[0].versions[0].description;
      var price = preparingResponse[0].versions[0].productOfferingPrices[0].versions[0].price.amount;

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ 'name' : name, 'description' : description, 'price': price }));
    }
  });

}

function getMilkInfo(req,res){

  var optionsSpec = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarm',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/?project=projectOpenFarm&expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);
      var name = preparingResponse[1].versions[0].name;
      var description = preparingResponse[1].versions[0].description;
      var price = preparingResponse[1].versions[0].productOfferingPrices[0].versions[0].price.amount;

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ 'name' : name, 'description' : description, 'price': price }));
    }
  });

}

function getAppleInfo(req,res){

  var optionsSpec = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmFruits',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/?project=projectOpenFarmFruits&expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);
      var name = preparingResponse[0].versions[0].name;
      var description = preparingResponse[0].versions[0].description;
      var price = preparingResponse[0].versions[0].productOfferingPrices[0].versions[0].price.amount;

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ 'name' : name, 'description' : description, 'price': price }));
    }
  });

}

function getOrangeInfo(req,res){

  var optionsSpec = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmFruits',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/?project=projectOpenFarmFruits&expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);
      var name = preparingResponse[1].versions[0].name;
      var description = preparingResponse[1].versions[0].description;
      var price = preparingResponse[1].versions[0].productOfferingPrices[0].versions[0].price.amount;

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ 'name' : name, 'description' : description, 'price': price }));
    }
  });

}

function getLettuceInfo(req,res){

  var optionsSpec = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmVeggies',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/?project=projectOpenFarmVeggies&expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);
      var name = preparingResponse[0].versions[0].name;
      var description = preparingResponse[0].versions[0].description;
      var price = preparingResponse[0].versions[0].productOfferingPrices[0].versions[0].price.amount;

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ 'name' : name, 'description' : description, 'price': price }));
    }
  });

}

function getTomatoInfo(req,res){

  var optionsSpec = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmVeggies',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  var optionsOffer = {
    url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productOffering/?project=projectOpenFarmVeggies&expand=true',
    headers: {
      'Authorization' : 'Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=',
      'accept' : 'application/json',
      'content-type' : 'application/json'
    }
  };

  request(optionsOffer, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var preparingResponse = JSON.parse(body);
      var name = preparingResponse[1].versions[0].name;
      var description = preparingResponse[1].versions[0].description;
      var price = preparingResponse[1].versions[0].productOfferingPrices[0].versions[0].price.amount;

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ 'name' : name, 'description' : description, 'price': price }));
    }
  });
}

router.get('/:parameter', function (req, res) {

  var produc = req.params.parameter;

  console.log(typeof(produc));

  if(produc == "poOpenFarmEgg"){
    getEggInfo(req,res);
  }
  else if(produc == "poOpenFarmMilk"){
    getMilkInfo(req,res);
  }
  else if(produc == "poOpenFarmApple"){
    getAppleInfo(req,res);
  }
  else if(produc == "poOpenFarmOrange"){
    getOrangeInfo(req,res);
  }
  else if(produc == "poOpenFarmLettuce"){
    getLettuceInfo(req,res);
  }
  else{ //tomato
    getTomatoInfo(req,res);
  }


});

module.exports = router;


