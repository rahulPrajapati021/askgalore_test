import express from 'express'
import { createUser, demo, verifyUser } from '../controllers/userController.js';
import { authenticateUser } from '../utils/JwtUtil.js';
const userRouter = express.Router();

userRouter.get("/demo", demo);
userRouter.post("/register", createUser);
userRouter.post("/login", verifyUser);
userRouter.get("/dashboard", authenticateUser, demo);


export default userRouter;