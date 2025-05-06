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
    // Простейшая реализация — сохраняем идентификатор в профиле.
    profile.identifier = identifier;
    // Здесь можно добавить логику поиска или создания пользователя в БД.
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Если экспортировать явно не требуется, можно завершить модуль здесь.
