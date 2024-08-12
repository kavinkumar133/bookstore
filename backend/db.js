//db.js
const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("MongoDb Connected");
    } catch (error) {
        console.log(error);
        console.log("MongoDb is not connected");
    }
};
