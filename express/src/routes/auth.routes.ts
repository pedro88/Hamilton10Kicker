// routes/auth.routes.ts
import express from "express";
import AuthController from "../controllers/auth.controller";
import { logger } from "../middleware/logger";

const authRouter = express.Router();
authRouter.use(express.json());

authRouter.post("/register", logger, AuthController.register);
authRouter.post("/login", logger, AuthController.login);

export default authRouter;
