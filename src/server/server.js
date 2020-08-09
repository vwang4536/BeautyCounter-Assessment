const express = require('express');
const mongoose = require('mongoose');
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

// Connect to database
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rbr6u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('You are connected to the database');
});

module.exports = app;