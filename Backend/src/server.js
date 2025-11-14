import express from "express";
const app = express();
import {ENV} from './lib/env.js'

const port = ENV.PORT | 3000;

app.get("/",(req,res) => {
    res.status(200).json({msg: "success from api"});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})