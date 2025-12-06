import { Router } from "express";
import { vehicleControllers } from "./vehicles.controller";

const router = Router();

router.post("/", vehicleControllers.createVehicle);

router.get("/", vehicleControllers.getVehicle);

router.get("/:id", vehicleControllers.getSingleVehicle);

export const vehicleRoutes = router;
