const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
  },
  role: {
    type: String,
    required: true,
  },
  goods: [{
    type: Schema.Types.ObjectId,
    ref: 'Goods'
  }],
  orders: [],
  cart: [],
  avatar: {
    type: String,
  },
});

const UserModel = model('Users', userSchema);

module.exports = UserModel;
