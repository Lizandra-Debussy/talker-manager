const fs = require('fs').promises;

const path = 'src/talker.json';

const registeredPerson = async () => {
  try {
    const data = JSON.parse(await fs.readFile(path, 'utf-8'));
    return data;
  } catch (err) {
    console.log(err);
  } 
};

const writeFilePerson = async (people) => {
  try {
    const data = await fs.writeFile(path, JSON.stringify(people));
    return data;
  } catch (err) {
    console.log(err);
  } 
};

module.exports = {
  registeredPerson,
  writeFilePerson,
};