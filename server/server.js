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

app.get("/api/v1/home", async (req, res) => {
  const categories = await CategoryModel.find();
  res.json(categories);
});

app.listen(PORT, () => {
  console.log('Server started on port ', PORT)
})
