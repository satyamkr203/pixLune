import express from 'express';
import { userSigninSchema, userSignupSchema } from '../zod/zodSchema.js';
import { validateZod } from '../middlewares/validateZod.js';
import { signup } from '../controllers/authControllers.js';
import { login } from '../controllers/authControllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { getMe } from '../controllers/authControllers.js';
import { generateImageController } from '../controllers/imageController.js';
const router = express.Router();

router.post("/register", validateZod(userSignupSchema), signup);
router.post("/login", validateZod(userSigninSchema),login);
router.get("/me", verifyToken, getMe);
router.post('/generate-image',verifyToken, generateImageController )

export {router}