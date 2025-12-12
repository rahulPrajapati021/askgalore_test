import express from 'express'
import { authenticateUser } from '../utils/JwtUtil.js';
import { createProduct, getProducts } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.get("/getProducts", authenticateUser, getProducts);
productRouter.post("/createProduct", authenticateUser, createProduct);

export default productRouter;