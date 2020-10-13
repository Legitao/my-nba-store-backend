const express = require('express');
const {
  getProducts,
  getProductById,
  createProductReview,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/:id').get(getProductById);

module.exports = router;
