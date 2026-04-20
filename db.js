const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB Atlas...");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    if (error.message.includes('ETIMEOUT')) {
      console.log("Tip: This is usually a Network/DNS issue. Please ensure your IP is whitelisted in MongoDB Atlas (Network Access -> 0.0.0.0/0).");
    }
    process.exit(1);
  }
};

module.exports = connectDB;
