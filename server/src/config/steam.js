// server/src/config/steam.js
export default {
  returnURL: 'http://localhost:3000/auth/steam/return', // URL, куда Steam перенаправит пользователя
  realm: 'http://localhost:3000/',                      // Базовый URL домена
  apiKey: process.env.STEAM_API_KEY || 'DC21432BB3116395884B9DA72C4B2E97'
};
