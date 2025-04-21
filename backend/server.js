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
      callback(null, true);  // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow methods you want
  allowedHeaders: ['Content-Type', 'Authorization'],    // Allow headers you want
  credentials: true,  // Allow sending cookies
  preflightContinue: false,  // Prevent server from automatically sending a response to preflight
  optionsSuccessStatus: 204,  // For legacy browsers
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use("/api", allRoutes);

  

app.listen(port, () =>{
    console.log(`server is running on the port ${port}`);
})
