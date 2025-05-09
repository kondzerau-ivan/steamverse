// server/src/middleware/sessionMiddleware.js
import session from 'express-session';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Определяем __filename и __dirname в ES модулях.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sessionMiddleware = session({
  // Используем файл secret-key, расположенный в корневой директории.
  secret: fs.readFileSync(path.join(__dirname, '../../../secret-key'), 'utf8').trim(),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // В продакшене используйте true (при работе через HTTPS)
  },
});
