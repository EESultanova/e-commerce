const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  fio: {
    type: String,
  },
  address: {
    type: String,
 },
  email: {
    type: String,
 },
  phone: {
    type: String,
  },
  card: {
    type: Number,
  },
  cardName: {
    type: String,
  },
  expMonth: {
    type: String,
  },
  expYear: {
    type: String,
  },
  cvv: {
    type: Number,
  },
  total: {
    type: Number
  },
  cart: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
 

});

const OrderModel = model('Orders', orderSchema);

module.exports = OrderModel;
