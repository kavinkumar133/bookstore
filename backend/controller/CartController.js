const Cart = require("../model/CartModel"); // Assuming you have a Cart model
const product = require("../model/BookModel");
// Add item to cart
const addItemToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
     console.log(userId);
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      const newCart = new Cart({  userId,products:[{productId,quantity}]});
      await newCart.save();
      return res.status(200).json(newCart);
    }
    console.log(cart.products);
    const itemIndex = cart.products.findIndex(item => item.productId == productId);
    if (itemIndex > -1) {
      cart.products[itemIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update item quantity

const get = async (req, res) => {
  try{
    const userId=req.user.id;
    let cart=await Cart.findOne({userId});
    if(!cart){  
      return res.status(404).json({msg:'Cart not found'});
    }
    const productDetails = [];
    for (const item of cart.products) {
      console.log(item)
      const Product = await product.findOne({ _id: item.productId });
      console.log(Product)
      if (Product) {
        productDetails.push({
          id:Product.id,
          name: Product.name,
          description: Product.description,
          price: Product.price,
          category: Product.category,
          image: Product.cover,
          quantity: item.quantity,
        });
      }
    }

    res.status(200).send(productDetails);
  }catch(err){
    console.error(err.message);
    res.status(500).json({msg:'Server error'});
  }
}
const updateItemQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
    } else {
      return res.status(404).json({ msg: 'Item not found in cart' });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.productId !== productId);

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  get,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart
};