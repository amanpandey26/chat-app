import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./database/connect.MongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 3000; 

app.use(express.json()); // to parse the incoming reqs with JSON (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.get("/",(req,res) => {
    res.send("home directory ...")    
})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is listening on port ... ",PORT);
})