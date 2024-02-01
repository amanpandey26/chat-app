import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connect.MongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000; 

dotenv.config();

app.use(express.json()); // to parse the incoming reqs with JSON (from req.body)

app.use("/api/auth",authRoutes)

// app.get("/",(req,res) => {
//     res.send("home directory ...")    
// })







app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is listening on port ... ",PORT);
})

