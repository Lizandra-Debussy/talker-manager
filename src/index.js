const express = require('express');
const bodyParser = require('body-parser');
const talkerRouters = require('./routers/talkerRouters');
const loginRouters = require('./routers/loginRouters');

const app = express();
app.use(bodyParser.json());
app.use('/talker', talkerRouters);
app.use('/login', loginRouters);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

module.exports = app;