import express from "express";
const app = express();
import {ENV} from './lib/env.js'
import { connectDB } from "./lib/db.js";

const port = ENV.PORT | 3000;

app.get("/",(req,res) => {
    res.status(200).json({msg: "success from api"});
})


const startserver = async() => {
    try {
        await connectDB();
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

startserver();