const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
router.get('/customer/list', adminController.listCustomer);
router.post('/customer/checkEmail', adminController.checkEmail)
router.post('/customer/register', adminController.registerCustomer)
router.delete('/customer/list/:id', adminController.deleteCustomer)
router.get('/customer/:id', adminController.showCustomerByID)
router.put('/customer/edit/:id', adminController.editCustomer)


router.get('/staff/list', adminController.listEmployee)
router.post('/staff/checkEmail', adminController.checkEmail)
router.post('/staff/register', adminController.registerStaff)
router.delete('/staff/list/:id', adminController.deleteStaff)
router.get('/staff/:id', adminController.showStaffByID)
router.put('/staff/edit/:id', adminController.editStaff)


module.exports = router;
