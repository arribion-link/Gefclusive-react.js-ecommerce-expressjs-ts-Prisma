import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudnary.js";
const app = express();

const PORT = process.env.PORT;
if (!PORT) {
    console.log("Error accessing application port");
    process.exit(1);
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    
});

app.listen(PORT, () => {
    connectDB()
    connectCloudinary()
    console.log(`http://localhost:${PORT}`);
} )
