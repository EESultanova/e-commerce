const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  goods: [{
    type: Schema.Types.ObjectId,
    ref: 'Goods'
  }],
  avatar: {
    type: String,
  },
});

const UserModel = model('Users', userSchema);

module.exports = UserModel;
