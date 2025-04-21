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

const corsOptions = {
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true,               // if you're using cookies or sessions
  };
  
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use("/api", allRoutes);

  

app.listen(port, () =>{
    console.log(`server is running on the port ${port}`);
})
