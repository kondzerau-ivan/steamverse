export function getProfileController(req, res) {
  const user = req.user;
  if (!user) {
    return res.status(500).json({ message: 'Ошибка: данные пользователя отсутствуют' });
  }

  res.json({
    user: {
      id: user.id,
      steamId: user.steamId,
      nickName: user.nickName,
      realName: user.realName,
      avatar: user.avatar,
      lastLogin: user.lastLogin
    },
  });
}
