const express = require('express');
const router = express.Router();
const CartController = require('../controller/CartController');
const {authUser} = require('../middleware/auth');

// Define routes and their respective callback functionst
router.get('/get',authUser,CartController.get); 
router.post('/add',authUser,CartController.addItemToCart);
router.put('/update', CartController.updateItemQuantity);
router.delete('/remove', CartController.removeItemFromCart);

module.exports = router;