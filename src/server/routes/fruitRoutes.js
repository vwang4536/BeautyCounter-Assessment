const express = require('express');
const app = express();
const getFruits = require('../controllers/fruitControllers');

// Routes: GET
app.get('/fruits', getFruits);
app.get('/fruit');

module.exports = app;