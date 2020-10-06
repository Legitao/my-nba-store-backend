const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('root path in backend');
});

app.use('/api/products', productRoutes);

const PORT = process.env.port || 5000;
app.listen(PORT, () =>
  console.log(`backend running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
