const express = require('express');

const router = express.Router();
const cartController = require('../controllers/cartController');

// router.post('/addToCart', cartController.addToCart);
router.get('/cart', cartController.listPaymentProduct);
router.get('/oncart', cartController.listProduct);
router.post('/addToCart', cartController.addToCart);
router.post('/dfetchdetail', cartController.decreaseQuantity);
router.post('/rfetchdetail', cartController.removeProduct);
router.post('/removeAllProduct', cartController.removeAllProduct);


module.exports = router;
