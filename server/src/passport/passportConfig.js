// server/src/passport/passportConfig.js
import passport from 'passport';
import SteamStrategy from 'passport-steam';
import { returnURL, realm, apiKey } from '../config/steam.js';
import { User } from '../models/User.js';

passport.use(new SteamStrategy({
  returnURL,
  realm,
  apiKey
},
  async (identifier, profile, done) => {
    try {
      const steamId = profile.id || identifier.split('/').pop();

      let user = await User.findOne({ where: { steamId } });

      if (!user) {
        user = await User.create({
          steamId,
          nickName: profile.displayName || '',
          realName: profile.realName || '',
          avatar: profile.photos.length ? profile.photos[0].value : null,
          lastLogin: new Date()
        });
      } else {
        user.lastLogin = new Date();
        await user.save();
      }
      return done(null, user);
    } catch (error) {
      console.error('Ошибка аутентификации через Steam:', error);
      return done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return done(new Error("Пользователь не найден"), null);
    }
    done(null, user);
  } catch (error) {
    console.error('Ошибка при десериализации пользователя:', error);
    done(error, null);
  }
});

export { passport };
