// server/src/app.js
import express from 'express';
import { sessionMiddleware } from './middleware/sessionMiddleware.js';
import './passport/passportConfig.js';
import passport from 'passport';
import { authRouter } from './routes/authRouter.js';
import { profileRouter } from './routes/profileRouter.js';

const app = express();
const prefix = '/api/v1';

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use(prefix, authRouter);
app.use(prefix, profileRouter);

app.get(prefix, (req, res) => {
  res.send('Привет! Если вы видите это сообщение, то Express-сервер успешно настроен.');
});

export default app;
