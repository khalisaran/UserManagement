var passport = require("passport");  
var passportJWT = require("passport-jwt");  
var models = require("../models");
var config = require('../config/config.json').jwt;
var ExtractJwt = passportJWT.ExtractJwt;  
var Strategy = passportJWT.Strategy;  
var params = {  
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {  
    var strategy = new Strategy(params, function(payload, done) {
        console.log("strategy is calling")
        models.Users.findOne({ where: {id: payload.id} }).then(function(data) {
            console.log(data);
            var user = data;
            if(user) {
                return done(null, {
                    id: user.id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
};