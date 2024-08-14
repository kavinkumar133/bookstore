// middleware/auth.js\
//file: backend/Middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate users
const authUser = (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    next();
  } catch (err) {
    console.error('Something wrong with auth middleware');
    res.status(500).json({ msg: 'Server error' });
  }
};

// Middleware to check if user is admin
const authAdmin = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied, admin only' });
    }

    next();
  } catch (err) {
    console.error('Something wrong with auth middleware');
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { authUser, authAdmin };
