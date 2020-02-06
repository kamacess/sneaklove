const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ref: {
    type: String,
    required: true
    // unique: true
  },
  sizes: {
    type: [Number],
    min: 16,
    max: 46,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
    // required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  category: {
    type: String,
    enum: ["men", "women", "kids"],
    required: true
  },
  tags: {
    type: Schema.Types.ObjectId,
    ref: "Tag"
  }
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;
