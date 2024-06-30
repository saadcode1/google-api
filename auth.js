if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}


const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
 passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log("Passport middleware running!")
      return done(err, user,profile);
  
  }
));

