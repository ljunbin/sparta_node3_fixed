const express = require('express');
const router = express.Router();

const SignupController = require('../controllers/signup.controller');
const signupController = new SignupController();


router.post('/', signupController.userSignup);

module.exports = router;