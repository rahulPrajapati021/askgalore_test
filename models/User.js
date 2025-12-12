import { DataTypes } from "sequelize";
import seq from "../config/db.js";
import Product from "./Product.js";
import Cart from "./Cart.js";

const User = seq.define('User', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name: {
        type:DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING
    },
})

export default User;