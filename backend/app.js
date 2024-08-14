const express = require("express");
const app = express();
const connection = require("./db");
const userRouter = require("./Route/UserRoutes");
const cartRouter = require('./Route/CartRoutes');
const bookRouter = require("./Route/BookRoutes");
const cors = require("cors");

// Connect to the database
connection();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Use the userRouter for routes starting with /api/users
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use('/api/cart', cartRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));