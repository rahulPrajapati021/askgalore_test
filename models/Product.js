import { DataTypes } from "sequelize";
import seq from "../config/db.js";

const Product = seq.define('Product', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING
    },
    price: {
        type:DataTypes.INTEGER
    }
})
export default Product;