import app from './app.js';
import { dbCheck } from './config/dbCheck.js';
import { sequelize } from './config/db.js';

(async () => {
  await dbCheck();
  await sequelize.sync();
})();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
