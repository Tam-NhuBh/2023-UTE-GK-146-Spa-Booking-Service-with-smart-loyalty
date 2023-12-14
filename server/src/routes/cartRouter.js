const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const verifyUser = require('../middleware/verifyUser')

// router.post('/addToCart', cartController.addToCart);
router.get('/cart', verifyUser, cartController.listPaymentProduct);
router.get('/oncart', verifyUser, cartController.listProduct);
router.post('/oncart', verifyUser, cartController.listProduct);
router.post('/addToCart', verifyUser, cartController.addToCart);
router.post('/dfetchdetail', verifyUser, cartController.decreaseQuantity);
router.post('/rfetchdetail', verifyUser, cartController.removeProduct);
router.post('/removeAllProduct', verifyUser, cartController.removeAllProduct);


module.exports = router;
