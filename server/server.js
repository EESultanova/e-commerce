require('dotenv').config()

const express = require("express");
const cors = require("cors");
const path = require('path');
const fileupload = require("express-fileupload");
const { dbConnect } = require("./src/db/connect");
const GoodModel = require("./src/models/good.model");
const CategoryModel = require("./src/models/category.model")

const authRouter = require('./src/routes/auth.routes');
const filesRouter = require('./src/routes/file.routes');
const UserModel = require('./src/models/user.model');

const app = express();

const { PORT } = process.env

dbConnect();

app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/files', filesRouter);

app.get("/api/v1/", async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.sendStatus(500)
  }
});

app.get("/api/v1/categories/:id", async (req, res) => {
  try {
    const goods = await GoodModel.find({ category: req.params.id })
    res.json(goods)
  } catch (error) {
    res.sendStatus(500)
  }
})

app.get("/api/v1/goods/:id", async (req, res) => {
  try {
    const { id } = req.params
    const good = await GoodModel.findById(id)
    res.json(good)
  } catch (error) {
    res.sendStatus(500)
  }
})

app.post("/api/v1/order", async (req, res) => {
  try {
    const order = {...req.body, currentUser: true}
    await UserModel.findByIdAndUpdate(req.body.currentUser.id,
      {$push:  {orders: order}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log('Server started on port ', PORT)
})
