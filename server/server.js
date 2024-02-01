import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connect.MongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 


app.get("/",(req,res) => {
    res.send("home directory ...")    
})

app.use("/api/auth",authRoutes)






app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is listening on port ... ",PORT);
})

