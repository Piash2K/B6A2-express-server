import { pool } from "../../config/db";

const getAllUser = async () => {
  const result = await pool.query(`SELECT * FROM Users`);
  return result;
};

export const userServices = {
  getAllUser,
};
