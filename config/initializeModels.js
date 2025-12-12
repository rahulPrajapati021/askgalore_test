import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

export async function initializeModels() {
    await User.sync();
    await Product.sync();
    User.hasMany(Cart);
    Product.hasOne(Cart);
    await Cart.sync();
}