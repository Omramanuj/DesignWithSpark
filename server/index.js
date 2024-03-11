import express from 'express';
import dalleRoutes from './routes/dalleRoutes.js'; // Adjust the path as necessary
import UserRoutes from './routes/UserRoutes.js'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();
const app = express();
// MongoDB connection URI
const mongoURI = 'mongodb+srv://ajha94023:qwertyuiop98765@cluster2.mwjrxlb.mongodb.net/?retryWrites=true&w=majority&appName=cluster2';
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// Connect to MongoDB
mongoose.connect(mongoURI, {

}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.log('Error connecting to MongoDB Atlas:', err.message);
});


const port = 5001;
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}
// Use the routes
app.use(express.json());
app.use(cors(corsOptions));
app.use('/dalle', dalleRoutes);
app.use('/users',UserRoutes);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});