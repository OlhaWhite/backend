require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');

const cors = require('cors');


connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/products', productRoutes);






const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))