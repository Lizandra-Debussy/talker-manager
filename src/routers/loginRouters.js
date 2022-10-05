const express = require('express');
const generateToken = require('../utils/token');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  
  if ([email, password].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  } 
  
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = router;