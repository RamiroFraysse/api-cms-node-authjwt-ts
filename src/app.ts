import {config} from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes'


config();

const app = express();

app.use(express.json());

//Routes
app.use('/auth',authRoutes);
app.use('/users',userRoutes);


//User

export default app;