import express, { Request, Response } from "express";
import initDB from "./config/db";
import router from "./modules/vehicles/vehicles.routes";

const app = express();

//parser
app.use(express.json());

//initialize DB
initDB();

//vehicles CRUD
app.use("/api/v1/vehicles", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
