const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login.controller');
const loginController = new LoginController();
const authLoginUserMiddleware = require('../middlewares/authLoginUserMiddleware');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/', authLoginUserMiddleware, loginController.userLogin);
router.get('/me', authMiddleware, loginController.confirmUser);
module.exports = router;