const fruitModel = require('../models/fruitModels');

/**
 * GET: Queries all fruits within database
 *
 * @param {Object} res - contains an array of fruits in res.body
 */
async function getFruits(req, res) {
  try {
    const fruits = await fruitModel.find({});
    res.send(fruits);
  } catch(err) {
    res.status(400).send(err);
  };
};

/**
 * GET: Query one fruit within database
 *
 * @param {Object} req - contains name of fruit in req.query
 * @param {Object} res - contains array of fruits in res.body
 */
async function getFruit(req, res) {
  let { name } = req.query;

  // Set name to lower case as fruits are saved as lowercase in database
  name = name.toLowerCase();

  try {
    const fruit = await fruitModel.find({ name });

    if (fruit.length) {
      res.send(fruit);
    } else {
      res.status(404).send(`Sorry, ${name} was not found in the database`);
    };
  } catch(err) {
    res.status(400).send(err);
  };
};

module.exports = { getFruits, getFruit };