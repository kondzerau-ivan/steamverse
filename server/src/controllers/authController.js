// server/src/controllers/authController.js
export function steamAuthController(req, res) {
  // Обычно этот обработчик не вызывается напрямую,
  // так как Passport управляет перенаправлением.
  res.send('Redirecting to Steam for authentication...');
}

export function steamReturnController(req, res) {
  // После успешной аутентификации информация о пользователе хранится в req.user.
  // Здесь можно добавить логику сохранения или обновления данных пользователя.
  res.redirect('/api/v1/profile');
}
