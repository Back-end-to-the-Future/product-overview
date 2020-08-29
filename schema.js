const { Schema } = require("mongoose");
let Schema = mongoose.Schema;

let products = new Schema({
  id: String,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [
    FeatureID(Number),
    // etc
  ],
  results: [
    {
      _id: Number,
      feature: String,
      value: String,
    },
    // etc
  ],
});

let styles = new Schema({
  style_id: Number,
  name: String,
  original_price: Number,
  sale_price: Number,
  "default?": Number,
  photos: [
    {
      _id: Number,
      thumbnail_url: String,
      url: String,
    },
    //etc
  ],
  skus: [
    {
      _id: Number,
      size: String,
      quantity: Number,
    },
    //etc
  ],
});
