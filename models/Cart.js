import { DataTypes } from "sequelize";
import seq from "../config/db.js";

const Cart = seq.define('Cart', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    quantity: {
        type:DataTypes.INTEGER,
        defaultValue:1
    }
});

export default Cart;
