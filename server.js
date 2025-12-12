// environment variable setup
import dotnev from "dotenv";
dotnev.config();


import express from 'express'
const app = express();

// database connection 
import { connectDatabase } from './config/db.js';
connectDatabase();
// initializeModels after database connection is established !!!
import { initializeModels } from "./config/initializeModels.js";
initializeModels();


// regular middleware
app.use(express.json());


// routers middleware
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import cartRouter from "./routers/cartRouter.js";
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);


// port setup
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`Server is running on port ${PORT}`);
})