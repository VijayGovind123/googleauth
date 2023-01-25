const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID:"152936745054-4cbpovr8hd2ql58a33s40r84fubmi9ae.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "https://googleauth-0dcd.onrender.com/auth/callback",
    passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
}
));
