// server/src/app.js
import express from 'express';
import { sessionMiddleware } from './middleware/sessionMiddleware.js';

// Импортируем конфигурацию Passport — этот импорт выполнит настройку стратегии.
import './passport/passportConfig.js';
import passport from 'passport';
import { authRouter } from './routes/authRouter.js';

const app = express();

// Подключаем middleware для сессий
app.use(sessionMiddleware);

// Инициализируем Passport и его сессию
app.use(passport.initialize());
app.use(passport.session());

// Подключение маршрутов для аутентификации
app.use(authRouter);

// Простой домашний маршрут для проверки работы сервера.
app.get('/', (req, res) => {
  res.send('Привет! Если вы видите это сообщение, то Express-сервер успешно настроен.');
});

export default app;
