const fruitModel = require('../models/fruitModels');

async function getFruits(req, res) {
  try {
    const fruits = await fruitModel.find({});
    res.send(fruits);
  } catch(err) {
    res.status(400).send(err);
  };
};

module.exports = getFruits;