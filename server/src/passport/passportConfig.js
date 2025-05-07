// server/src/passport/passportConfig.js
import passport from 'passport';
import SteamStrategy from 'passport-steam';
import steamConfig from '../config/steam.js';

passport.use(new SteamStrategy({
  returnURL: steamConfig.returnURL,
  realm: steamConfig.realm,
  apiKey: steamConfig.apiKey
},
  (identifier, profile, done) => {
    profile.identifier = identifier;
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
