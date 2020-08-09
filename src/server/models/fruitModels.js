const mongoose = require('mongoose');
// require('mongoose-type-url')

// Create schema for fruit details in collection
const FruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  weight: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    trim: true,
  }   
});