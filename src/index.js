import dotenv from "dotenv";
// import mongoose from "mongoose";
import connectDB from "../db/connectDB.js";
import express from "express";

dotenv.config({
    path: "./.env"
})

const app = express();

console.log("DB")
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.error("MONGODB connect FAILED!",error)});


