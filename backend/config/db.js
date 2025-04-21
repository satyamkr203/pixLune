import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

const mongo_url = process.env.MONGO_URL;

export const connectDB = async() =>{
    await mongoose.connect(mongo_url).then(() =>{
        console.log(`database connected successfully`);
    })
    .catch((err) =>{
        console.log(err);
    })
}