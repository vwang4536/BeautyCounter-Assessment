const express = require('express');

require('dotenv').config();

// Configure server
const app = express();
const port = 3000;

// Server start
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;