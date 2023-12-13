const express = require('express');
const router = express.Router();
const verifyUser = require('../middleware/verifyUser');
const homeController = require('../controllers/homeController');

router.post('/register/checkEmail', homeController.checkEmail);
router.post('/register', homeController.registerExecute);
router.post('/login', homeController.loginExecute);
router.get('/logout', homeController.logoutExecute);
router.get('/', verifyUser, homeController.showVerifyUser);

module.exports = router;