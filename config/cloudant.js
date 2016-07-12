var express  = require('express'),
    app         = express(),
    bodyParser  = require("body-parser"),
    cfenv       = require("cfenv"),
    appEnv      = cfenv.getAppEnv(),
    cloudant    = require("cloudant");

// Global variables
var vcapServices;
var cloudantURL;
var dbAir;
var dbAirName = "openfarm-nodered-cloudantNoSQLDB";
var dbAuth;
var dbAuthName = "openfarm-auth";

// VCAP or Local Deploy
if(process.env.VCAP_SERVICES) {
		vcapServices = JSON.parse(process.env.VCAP_SERVICES);	
		if(vcapServices.cloudantNoSQLDB) {
			cloudantURL = vcapServices.cloudantNoSQLDB[0].credentials.url;
			console.log("Cloudant URL: ",cloudantURL);
		}
	
		console.log("Using VCAP credentials.Cloudant: "+cloudantURL+" Tone Analyzer: "+taURL);
	} else {
		// Set defaults for no VCAP or local. Replace with your Cloudant details from Bluemix.
		var cloudantUsername = "f12e315b-edf9-40fa-afaf-a8f16e7237bb-bluemix";
		var cloudantPassword = "7ab7118b4132004ccd992b98a08b69aeb87f9b11adf3e0430e1f4b137c8e02fd";
		var cloudantHost = "f12e315b-edf9-40fa-afaf-a8f16e7237bb-bluemix.cloudant.com";
		
		cloudantURL = "https://"+cloudantUsername+":"+cloudantPassword+"@"+cloudantHost;
		console.log("No VCAP. Use stored credentials.");
}

function initDBConnection() {
	
	var Cloudant = cloudant(cloudantURL);
	
	// Check to see if the dbAirName database exists and create 
	Cloudant.db.create(dbAirName, function(err,body){
		if (err) {
			console.log("Database already exists.");
		} else {
			console.log("New database created: ", dbAirName);
		}
	});
	
	dbAir = Cloudant.db.use(dbAirName);

	Cloudant.db.create(dbAuthName, function(err,body){
		if (err) {
			console.log("Database already exists.");
		} else {
			console.log("New database created: ", dbAuthName);
		}
	});
	
	dbAuth = Cloudant.db.use(dbAuthName);
	console.log("Database data initialized.");
}

initDBConnection();
module.exports = {dbAir, dbAuth, cloudantURL};