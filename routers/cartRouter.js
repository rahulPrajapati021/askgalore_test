import express from 'express'
import { authenticateUser } from '../utils/JwtUtil.js';
import { addToCart, deleteFromCart, viewCart } from '../controllers/cartController.js';
const cartRouter = express.Router();

cartRouter.get("/viewCart", authenticateUser, viewCart);
cartRouter.post("/addToCart", authenticateUser, addToCart);
cartRouter.post("/deleteFromCart", authenticateUser, deleteFromCart);

export default cartRouter;