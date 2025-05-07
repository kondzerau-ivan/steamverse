import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export const dbCheck = async () => {
  const client = new Client({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: Number(DB_PORT),
    database: 'postgres'
  });

  try {
    await client.connect();

    const res = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [DB_NAME]);

    if (res.rowCount === 0) {
      console.log(`⚠️ База данных ${DB_NAME} не найдена, создаем...`);
      await client.query(`CREATE DATABASE ${DB_NAME}`);
      console.log(`✅ База данных ${DB_NAME} создана.`);
    } else {
      console.log(`✅ База данных ${DB_NAME} уже существует.`);
    }
  } catch (error) {
    console.error("❌ Ошибка при проверке базы данных:", error);
  } finally {
    await client.end();
  }
}
