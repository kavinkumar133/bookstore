// UserRoutes.js
//file: backend/Route/UserRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require("../controller/userController");
const { authUser, authAdmin } = require("../Middleware/auth");

router.post('/register', register);
router.post('/login', login);

// Example of an admin-only route
router.get('/admin-only', authAdmin, (req, res) => {
  res.send('Admin content');
});

// Example of a user-protected route
router.get('/user-only', authUser, (req, res) => {
  res.send('User content');
});

module.exports = router;
