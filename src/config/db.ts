import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
  connectionString: config.connectionString,
});

const initDB = async () => {
  await pool.query(`CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL CHECK (email = LOWER(email)),
    password TEXT NOT NULL CHECK(LENGTH(password)>=6),
    phone VARCHAR(15) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role = 'admin' OR role = 'customer')
    )`);
};

export default initDB;
