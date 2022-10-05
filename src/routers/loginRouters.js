const express = require('express');
const generateToken = require('../utils/token');
const emailValidate = require('./middlewares/loginValidate/emailValidate');
const passwordValidate = require('./middlewares/loginValidate/passwordValidate');

const router = express.Router();

router.post('/', 
passwordValidate,
emailValidate,
(req, res) => {
  const { email, password } = req.body;
  const token = generateToken();
  
  if (email && password) {
    return res.status(200).json({ token });
  }
});

module.exports = router;