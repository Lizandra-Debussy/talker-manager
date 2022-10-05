const express = require('express');

const router = express.Router();
const { registeredPerson, writeFilePerson } = require('../utils/fs');
const nameValidate = require('./middlewares/talkerValidade/nameValidate');
const ageValidate = require('./middlewares/talkerValidade/ageValidate');
const talkValidate = require('./middlewares/talkerValidade/talkValidate');
const tokenValidate = require('./middlewares/talkerValidade/tokenValidate');
const watchedAtVatlidation = require('./middlewares/talkerValidade/watchedAtValidate');
const rateValidate = require('./middlewares/talkerValidade/rateValidate');

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

router.post('/',
  tokenValidate,
  nameValidate,
  ageValidate,
  talkValidate,
  watchedAtVatlidation,
  rateValidate,
  async (req, res) => {
  const talkers = req.body;
  const response = await registeredPerson();

  const addId = response.length + 1;
  const newTalker = { id: addId, ...talkers };
  
  response.push(newTalker);

  await writeFilePerson(response);

  if (talkers) {
    return res.status(201).json(newTalker);
  }
});

module.exports = router;