const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const re = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!re.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = emailValidate;