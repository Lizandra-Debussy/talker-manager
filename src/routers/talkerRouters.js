const express = require('express');

const router = express.Router();
const registeredPerson = require('../utils/fs');

router.get('/', async (_req, res) => {
  const response = await registeredPerson();
  if (response) {
    return res.status(200).json(response);
  } 
    return [];
});

router.get('/:id', async (req, res) => {
    const response = await registeredPerson();
    const talkerId = response.find(({ id }) => id === Number(req.params.id));
    if (talkerId) {
      return res.status(200).json(talkerId);
    } 
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = router;