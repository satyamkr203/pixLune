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
  origin: '*',  // Allow all origins temporarily
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
  credentials: true,  // Allow credentials (cookies)
  preflightContinue: false,  // Don't send a preflight response automatically
  optionsSuccessStatus: 204,  // For legacy browsers
};

app.use(cors(corsOptions));  // Use the CORS configuration globally

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use("/api", allRoutes);

  

app.listen(port, () =>{
    console.log(`server is running on the port ${port}`);
})
