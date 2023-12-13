const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/listService', bookingController.listServices)
router.post('/listEmployee', bookingController.listEmployee)
router.post('/submitBooking', bookingController.submitBooking)

module.exports = router;