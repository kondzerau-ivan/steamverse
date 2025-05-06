// server/src/routes/authRoutes.js
import { Router } from 'express';
import passport from 'passport';
import { steamAuthController, steamReturnController } from '../controllers/authController.js';

const router = Router();

// Маршрут для начала аутентификации через Steam.
router.get('/auth/steam',
  passport.authenticate('steam'),
  steamAuthController
);

// Маршрут для обратного вызова после аутентификации.
router.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/login' }),
  steamReturnController
);

export default router;
