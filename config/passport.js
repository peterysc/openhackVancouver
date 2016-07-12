var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cloudant = require('../config/cloudant.js');
var dbAuth = cloudant.dbAuth;

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  dbAuth.get(id, function(err, result) {
    if (!err) {
      return done(null, result);
    }
   
    return done(null, false);
  });
});

// local signup
passport.use('local-signup', new LocalStrategy(
  function(username, password, done) {
      dbAuth.insert({ _id: username, password: password }, username, function(err, body, header) {
        if (err) {
          return done(null, false);
        }
        return done(null, body);
      });
  }));

// local login
passport.use('local-signin', new LocalStrategy(
  function(username, password, done) {
    dbAuth.get(username, function(err, result) {
      if (!err) {
        return done(null, result);
      }
     
      return done(null, false);
    });
  }));