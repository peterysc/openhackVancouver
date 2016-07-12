/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var CloudantStore = require('connect-cloudant')(session);
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// get cloudant
var cloudant = require('./config/cloudant.js');
console.log("This is cloudant url" + cloudant.cloudantURL);

//Required setup for passport
require('./config/passport');
var cloudantStore = new CloudantStore({
     url: cloudant.cloudantURL, //required
     databaseName: 'sessions' //optional
});
cloudantStore.on('connect', function() {
    console.log("Cloudant Session store is ready for use");
});
app.use(session({
	secret: process.env.SESSION_SECRET || 'whenyoufeelitintherainbow',
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
    store: cloudantStore
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var catalog = require('./routes/catalog');
var telus = require('./routes/telus');
var ordering = require('./routes/ordering');
var email = require('./routes/email');

app.use('/catalog', catalog);
app.use('/telus', telus);
app.use('/email', email);

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});