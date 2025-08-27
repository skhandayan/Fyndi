import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import authRoutes from './routes/auth.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('server started on PORT: ', PORT);
  })
})

app.use("/api/users", authRoutes)