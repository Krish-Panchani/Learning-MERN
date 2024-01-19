const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernnp'; //Change this to your own DB

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Database connected successfully");

    }
    catch(err){
        console.error("Database connection failed");
        process.exit(0);
    }
};

module.exports = connectDB;
