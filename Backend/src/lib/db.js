import mongoose from 'mongoose';
import {ENV} from './env.js'

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("Database Connected successfully",conn.connection.host);
    } catch (error) {
        console.log(error)
        process.exit(1) //0 means success and 1 means failure
    }
}