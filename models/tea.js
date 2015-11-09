var mongoose = require('mongoose');

var teaSchema = new mongoose.Schema({
  "name": { type: String, required: true},
  "_id": String,
  "ingredients": String,
  "price": Number,
  "quantity": Number,
  "inStock": Boolean,
  "rating": Number,
  "imgUrl": String,
  "__v": Number,
  "categories": [String]
});

var Tea = mongoose.model("Tea", teaSchema);

module.exports = Tea;