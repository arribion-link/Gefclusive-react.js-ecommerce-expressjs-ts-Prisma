import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudnary.js";
import userRouter from "./routes/user.Route.js";
const app = express();

const PORT = process.env.PORT;
if (!PORT) {
    console.log("Error accessing application port");
    process.exit(1);
}

app.use(cors());
app.use(express.json());

app.use("/v1/api/", userRouter);

app.listen(PORT, () => {
    connectDB()
    connectCloudinary()
    console.log(`http://localhost:${PORT}`);
} )
