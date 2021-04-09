const { model, Schema } = require("mongoose");

const goodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
  },
  delivery: {
    type: String
  },
});

const GoodModel = model('Goods', goodSchema);

module.exports = GoodModel;
