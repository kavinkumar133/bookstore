//file: backend/Route/CartRoutes.js
const express = require('express');
const router = express.Router();
const CartController = require('../controller/CartController');

router.get('/getcart', CartController.getAllCartItems);
router.get('/getcart/:id', CartController.getCartItemById);
router.post('/addcart', CartController.addCartItem);
router.put('/updatecart/:id', CartController.updateCartItem);
router.delete('/deletecart/:id', CartController.deleteCartItem);

module.exports = router;

