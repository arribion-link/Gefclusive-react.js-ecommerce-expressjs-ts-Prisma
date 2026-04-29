import mongoose from "mongoose";
import "dotenv/config"
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.log("error accessing db string");
    process.exit(1);
}

const connectDB = () => {
    try {
        mongoose.connect(MONGO_URI);
        console.log("database connected successfully...")
    } catch (error) {
        console.log("Database error:", error)
    }
}

export default connectDB