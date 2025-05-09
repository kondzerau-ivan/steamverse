// server/src/routes/authRoutes.js
import { Router } from 'express';
import { passport } from '../passport/passportConfig.js'; // Импортируем конфигурацию Passport
import { steamAuthController, steamReturnController } from '../controllers/authController.js';

export const authRouter = Router();

// Маршрут для начала аутентификации через Steam.
authRouter.get('/auth/steam',
  passport.authenticate('steam'),
  steamAuthController
);

// Маршрут для обратного вызова после аутентификации.
authRouter.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  steamReturnController
);
