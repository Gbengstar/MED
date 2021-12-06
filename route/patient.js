import { Router } from "express";
import { patientDetail } from "../controllers/patient.controller.js";

const router = Router();

router.get("/", patientDetail);
export default router;
