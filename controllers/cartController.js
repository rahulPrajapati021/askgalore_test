import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

export async function addToCart(req, res) {
  const { productId, quantity } = req.body;
  if (!productId) {
    return res.status(404).json({ msg: "product id not found in params" });
  }
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    return res.status(404).json({ msg: "product not found" });
  }

  // userDetails already attached by jwtMiddleware
  const user = await User.findByPk(req.userDetails.id);
  if (!user) {
    return res
      .status(404)
      .json({ msg: "user not exists, deleted before token expire" });
  }

  // add to cart finally // may exists already use findOrCreate
  await Cart.findOrCreate({where: {UserId: user.id, ProductId: productId}, defaults: {
    quantity: quantity,
    UserId: user.id,
    ProductId: product.id,
  }});
  return res.status(201).json({ msg: "added to cart successfully" });
}

export async function deleteFromCart(req, res) {
  const { productId } = req.body;
  if (!productId) {
    return res.status(404).json({ msg: "product id not found in params" });
  }
  // userDetails already attached by jwtMiddleware
  const user = await User.findByPk(req.userDetails.id);
  if (!user) {
    return res
      .status(404)
      .json({ msg: "user not exists, deleted before token expire" });
  }
  await Cart.destroy({ where: { UserId: user.id, ProductId: productId } });
  return res.status(209).json({ msg: "deleted from cart" });
}

export async function viewCart(req, res) {
  try {
    // userdetails exists in req.userDetails
    const data = await Cart.findAll({ where: { UserId: req.userDetails.id }});
    return res.status(200).json({ msg: "user cart", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "getting error" });
  }
}
