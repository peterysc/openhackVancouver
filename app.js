/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// get cloudant
var cloudant = require('./config/cloudant.js');

//Required setup for passport
require('./config/passport');

//Connect to mongoDB
var configDB = require('./config/mongodb.js');
mongoose.connect(configDB.url);

//Check database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successfully connected to mongoDB");
});

app.use(session({
	secret: process.env.SESSION_SECRET || 'whenyoufeelitintherainbow',
    httpOnly: false,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db })
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var catalog = require('./routes/catalog');
var telus = require('./routes/telus');
var email = require('./routes/email');
var auth = require('./routes/auth');
var view = require('./routes/view');
var cart = require('./routes/cart');

app.use('/catalog', catalog);
app.use('/telus', telus);
app.use('/email', email);
app.use('/auth', auth);
app.use('/', view);
app.use('/cart', cart);

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});