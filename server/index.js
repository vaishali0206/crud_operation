const express = require("express");
const router = require("./router");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = 8000;

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

mongoose
  .connect("mongodb://localhost:27017", {
  //  useNewUrlParser: true,
  //  useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});