const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/checkEmail', registerController.checkEmail);
router.post('/', registerController.registerExecute);
module.exports = router;
