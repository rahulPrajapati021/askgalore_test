import Product from "../models/Product.js";

//create product
export async function createProduct(req, res) {
  try {
    // check name & price
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(404).json({ msg: "name & price are require" });
    }
    // create product
    const product = await Product.create({ name, price });
    return res.status(201).json({ msg: "created product", product });
  } catch (error) {
    //error occured
    return res.status(501).json({ msg: "name & price not found" });
  }
}

export async function getProducts(req, res) {
  const products = await Product.findAll();
  return res.status(200).json({ msg: "all products", products });
}
