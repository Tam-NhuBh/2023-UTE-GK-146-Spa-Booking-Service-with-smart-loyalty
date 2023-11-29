const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
router.get('/customer/list', adminController.listCustomer);
router.post('/staff/checkEmail', adminController.staffCheckEmail)
router.post('/staff/register', adminController.staffRegister)
router.get('/staff/list', adminController.listEmployee)

module.exports = router;
