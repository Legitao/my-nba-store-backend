const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.use(cors());

// use json body-parser to extract data to req.body
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('root path in backend');
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// 404 middleware, not technically a error handler
app.use((req, res, next) => {
  console.log('404 handler called');
  res
    .status(404)
    .send(`Sorry can't find that: 404 Page Not Found - ${req.originalUrl}`);
});

//error handler
app.use(errorHandler);

const PORT = process.env.port || 5000;
app.listen(PORT, () =>
  console.log(`backend running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
