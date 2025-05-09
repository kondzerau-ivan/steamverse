import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';
import { getProfileController } from '../controllers/profileController.js';

export const profileRouter = Router();

profileRouter.get('/profile', ensureAuthenticated, getProfileController);
