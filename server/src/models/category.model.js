const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  nameRu: {
    type: String,
  },
  photo: {
    type: String,
  }
});

const CategoryModel = model('Categories', categorySchema);

module.exports = CategoryModel;
