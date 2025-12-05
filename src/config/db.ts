import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
  connectionString: config.connectionString,
});

const initDB = async () => {
  await pool.query(`CREATE TABLE IF NOT EXISTS Users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL CHECK (email = LOWER(email)),
    password TEXT NOT NULL CHECK(LENGTH(password)>=6),
    phone VARCHAR(15) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role = 'admin' OR role = 'customer')
    )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS Vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(150) NOT NULL,
        type VARCHAR(50) NOT NULL CHECK(type IN ('car', 'bike', 'van','SUV')),
        registration_number VARCHAR(200) UNIQUE NOT NULL,
        daily_rent_price INT NOT NULL CHECK(daily_rent_price>0),
        availability_status VARCHAR(100) NOT NULL CHECK (availability_status IN ('available','booked'))
        )`);
};

export default initDB;
