import express, { Request, Response } from "express";
import initDB from "./config/db";
import { vehicleRoutes } from "./modules/vehicles/vehicles.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

//parser
app.use(express.json());

//initialize DB
initDB();

//auth routes
app.use("/api/v1/auth/", authRoutes);

//vehicles CRUD
app.use("/api/v1/vehicles", vehicleRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
