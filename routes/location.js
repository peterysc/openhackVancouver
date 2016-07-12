var express = require('express');
var request = require('request');
var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

var transporter = nodemailer.createTransport({
	service:'Hotmail',
	auth: {
		user: 'cpen391sender@outlook.com',
		pass: 'jasonisgod1'
	}
});

var options = {
    from: '"Fred Foo 👥" <cpen391sender@outlook.com>', // sender address
    to: 'jka73@sfu.createTransport', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Your package has been delivered to 2550 Wesbrook Mall' // plaintext body
}

var locationRequest = {
	url: 'http://apps.gov.bc.ca/pub/geocoder/addresses.json?addressString=2550%20Wesbrook%20Mall&locationDescriptor=any&maxResults=1&interpolation=adaptive&echo=true&setBack=0&outputSRS=4326&minScore=1&provinceCode=BC',
	headers : {	'accept': 'application/json'}
};

var farmersMarketLocations = [
 {
   "Year": "2014",
   "MarketName": "Kerrisdale Village Farmers Market",
   "MarketAddress": "5300  East Boulevard, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Saturday",
   "Open": "10am",
   "Close": "2pm",
   "Months": "June-October",
   "lat" : "49.2382824",
   "lon" : "-123.1548488"
 },
 {
   "Year": "2014",
   "MarketName" : "Kitsilano Farmers Market",
   "MarketAddress": "2690  Larch St, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Sunday",
   "Open": "10am ",
   "Close": "2pm",
   "Months": "May-October",
   "lat" : "49.2620554",
   "lon" : "-123.1601056"
 },
 {
   "Year": "2014",
   "MarketName" : "Main St Station Farmers Market",
   "MarketAddress": "1100  Station St, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Wednesday",
   "Open": "3pm",
   "Close": "7pm",
   "Months": "June-October",
   "lat" : "44.199612",
   "lon" : "-138.4476442"
 },
 {
   "Year": "2014",
   "MarketName" : "Oak Street Farmers Market",
   "MarketAddress": "494 W 49th Av, Vancouver BC",
   "Website": "oakstreetmarket.ca",
   "Day": "Wednesday",
   "Open": "3pm ",
   "Close": "7pm",
   "Months": "June-January",
   "lat" : "49.2260387",
   "lon" : "-123.1163239"
 },
 {
   "Year": "2014",
   "MarketName" : "River District Farmers Market",
   "MarketAddress": "8683  Kerr St, Vancouver BC",
   "Website": "http://www.riverdistrict.ca",
   "Day": "Saturday",
   "Open": "10am",
   "Close": "3pm",
   "Months": "May-October",
   "lat" : "44.199612",
   "lon" : " -138.4476442"
 },
 {
   "Year": "2014",
   "MarketName" : "Trout Lake Farmers Market",
   "MarketAddress": "3092  Garden Drive, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Saturday",
   "Open": "9am",
   "Close": "2pm",
   "Months": "May-October",
   "lat" : "49.2569066",
   "lon" : "-123.0578273"
 },
 {
   "Year": "2014",
   "MarketName" : "West End Farmers Market",
   "MarketAddress": "1164  Comox St, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Saturday",
   "Open": "9am",
   "Close": "2pm",
   "Months": "June-October",
   "lat" :"49.282605",
   "lon" : "-123.1309505"
 },
 {
   "Year": "2014",
   "MarketName" : "Winter Farmers Market",
   "MarketAddress": "4580  Ontario St, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Saturday",
   "Open": "10am",
   "Close": "2pm",
   "Months": "November-April",
   "lat" : "49.2435187",
   "lon" : "-123.1048565"
 },
 {
   "Year": "2014",
   "MarketName" : "Yaletown Farmers Market",
   "MarketAddress": "1100  Mainland St, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Thursday",
   "Open": "2pm",
   "Close": "6pm",
   "Months": "Mid-August to September",
   "lat" : "49.2755581",
   "lon" : "-123.1204986"
 },
 {
   "Year": "2014",
   "MarketName" : "Mount Pleasant Market",
   "MarketAddress": "2300  Guelph St, Vancouver BC",
   "Website": "eatlocal.org",
   "Day": "Sundays",
   "Open": "10am",
   "Close": "12pm",
   "Months": "June-October",
   "lat" : "49.2640399",
   "lon" : "-123.0940422"
 }
];

router.get('/location', function(req, res) {
	request(locationRequest, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    	var ans = JSON.parse(body);
    	var latitude = ans.features[0].geometry.coordinates[1];
    	var longitude = ans.features[0].geometry.coordinates[0];
    }
    res.send();
  });

});

function getCloseMarkets(lat, lon){

	var getCloseMarkets = ["Yaletown Farmers Market","Mount Pleasant Market","West End Farmers Market"];
	return getCloseMarkets;
}

transporter.sendMail(options, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
});



module.exports = router;


