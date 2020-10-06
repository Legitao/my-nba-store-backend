const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const products = require('./products');

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('root path in backend');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

const PORT = process.env.port || 5000;
app.listen(PORT, () =>
  console.log(`backend running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
