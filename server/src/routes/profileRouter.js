import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

export const profileRouter = Router();

profileRouter.get('/profile', ensureAuthenticated, (req, res) => {
  const user = req.user;
  res.json({
    message: 'Профиль пользователя',
    user: {
      id: user.id,
      steamId: user.steamId,
      nickName: user.nickName,
      realName: user.realName,
      avatar: user.avatar,
      lastLogin: user.lastLogin
    },
  });
});
