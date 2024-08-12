const express = require("express");
const app = express();
const connection = require("./db");
const userRouter = require("./Route/UserRoutes");
const BookRouter = require("./Route/BookRoutes");

// Connect to the database
connection();

// Middleware to parse JSON
app.use(express.json());

// Use the userRouter for routes starting with /api/users
app.use("/api/users", userRouter);
app.use("/api/books", BookRouter);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
