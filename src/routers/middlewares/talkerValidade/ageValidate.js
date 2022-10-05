const ageValidate = (req, res, next) => {
  const { age } = req.body;
  const min = 18;
  if (!Number.isInteger(age)) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < min) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = ageValidate;