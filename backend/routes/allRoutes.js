import express from 'express';
import {router as authRoutes} from './authRoutes.js';
const router = express.Router();


router.use("/auth", authRoutes);

export default router;