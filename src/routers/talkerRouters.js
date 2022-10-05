const express = require('express');

const router = express.Router();
const registeredPerson = require('../utils/fs');

router.get('/', async (_req, res) => {
  try {
    const response = await registeredPerson();
    res.status(200).json(response);
  } catch (err) {
    return [];
  }
});

module.exports = router;