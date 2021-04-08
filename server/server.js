require('dotenv').config()

const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/db/connect");
const GoodModel = require("./src/models/good.model");
const CategoryModel = require("./src/models/category.model")

const app = express();

const { PORT } = process.env

dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/", async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.sendStatus(500)
  }
});

app.get("/api/v1/category/:id", async (req, res) => {
  try {
    const goods = await GoodModel.find({category: req.params.id})
    res.json(goods)
  } catch (error) {
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log('Server started on port ', PORT)
})
