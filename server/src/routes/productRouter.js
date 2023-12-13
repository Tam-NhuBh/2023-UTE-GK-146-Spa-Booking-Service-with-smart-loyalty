const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/products/:id', productController.getProductById)
router.get('/products', productController.getAllProducts);
router.get('/categories', productController.getAllCategories)
router.get('/products-by-category', productController.getProductsByCategory)

module.exports = router;
