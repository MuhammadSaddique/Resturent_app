const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

connectMongoDB();

module.exports = connectMongoDB;
