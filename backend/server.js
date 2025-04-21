import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './config/db.js';
import allRoutes from './routes/allRoutes.js'
const port = process.env.PORT;

const app = express();
connectDB();


  
app.use(express.json());
const allowedOrigins = ['https://pix-lune.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies/credentials to be sent
};

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use("/api", allRoutes);

  

app.listen(port, () =>{
    console.log(`server is running on the port ${port}`);
})
