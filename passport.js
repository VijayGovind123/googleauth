const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID:"479204704929-aifusfa1s1347gvkjk4g4afgtuhufc4u.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "https://googleauth-0dcd.onrender.com/auth/callback",
    passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
}
));
