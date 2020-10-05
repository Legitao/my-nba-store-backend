const express = require('express');
const cors = require('cors');
const products = require('./products');

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

app.listen(5000, () => console.log('backend running'));
