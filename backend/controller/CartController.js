//filename: CartController.js
const CartModel = require('../model/CartModel');

const getAllCartItems = async (req, res) => {
    try {
        const cartItems = await CartModel.find();
        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const getCartItemById = async (req, res) => {
    try {
        const cartItem = await CartModel.findById(req.params.id);
        res.status(200).json({ cartItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const addCartItem = async (req, res) => {
    try {
        const cartItem = await CartModel.create(req.body);
        res.status(201).json({ cartItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
    
const updateCartItem = async (req, res) => {
    try {
        const cartItem = await CartModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ cartItem });
    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deleteCartItem = async (req, res) => {
    try {
        await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Cart item deleted successfully' });
    }catch (error)
    {
        res.status(500).json({ message: error.message });
        }
        }


module.exports = { getAllCartItems, getCartItemById, addCartItem, updateCartItem, deleteCartItem };


