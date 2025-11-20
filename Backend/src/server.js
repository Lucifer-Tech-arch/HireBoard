import express from "express";
import path from 'path';
const app = express();
import {ENV} from './lib/env.js';
import { connectDB } from "./lib/db.js";
import cors from 'cors';
import {serve} from 'inngest/express'
import { inngest } from "./lib/inngest.js";
import { functions } from "./lib/inngest.js";

const port = ENV.PORT | 3000;

const __dirname = path.resolve();

//middlewares
app.use(express.json());
app.use(cors({origin: ENV.CLIENT_URL, credentials: true})); //creadentials - true means our server allows a client to include cookies on request

app.use("/api/ingest",serve({client: inngest, functions }))

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