var mongoose = require('mongoose');

var teaSchema = new mongoose.Schema({
  name: { type: String, required: true},
  _id: String,
  ingredients: String,
  price: Number,
  inStock: Boolean,
  rating: Number,
  imgUrl: String,
  categories: [String]
});

var Tea = mongoose.model("tea", teaSchema);

module.exports = Tea;