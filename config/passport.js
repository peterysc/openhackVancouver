var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cloudant = require('../config/cloudant.js');
var dbAuth = cloudant.dbAuth;

// local signup
passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
      
  })
);

// local login
passport.use('local-login', new LocalStrategy({
  passReqToCallback: true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) { // callback with email and password from our form

  })
);