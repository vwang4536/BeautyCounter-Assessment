const express = require('express');
const fruitRoutes = require('./routes/fruitRoutes');
require('dotenv').config();

// Configure server
const app = express();
const port = 3000;

// Set up route use
app.use(fruitRoutes);

// Server start
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;