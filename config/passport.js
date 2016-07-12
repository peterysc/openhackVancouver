var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cloudant = require('../config/cloudant.js');
var dbAuth = cloudant.dbAuth;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null);
});

// local signup
passport.use('local-signup', new LocalStrategy(
  function(username, password, done) {
      dbAuth.insert({ username: username, password: password }, username, function(err, body, header) {
        if (err) {
          return console.log(err);
        }
   
        console.log('You have inserted the rabbit.');
        console.log(body);
        return done(null, body);
      });
    
  }));

// local login
passport.use('local-signin', new LocalStrategy(
  function(username, password, done) {
    dbAuth.find({selector:{username:username}}, function(er, result) {
      if (er) {
        return done(err);
      }
     
      if(result.docs.length == 0) {
        return done(null, result[0]);
      } else {
        return done(null, false);
      }
    });
  }));