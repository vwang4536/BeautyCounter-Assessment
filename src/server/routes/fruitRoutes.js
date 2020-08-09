const express = require('express');
const app = express();
const fruitControllers = require('../controllers/fruitControllers');

// Route for querying all fruits
app.get('/fruits', fruitControllers.getFruits);

// Route for querying one fruit
app.get('/fruit', fruitControllers.getFruit);

module.exports = app;