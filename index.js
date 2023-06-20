const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;
const orderRouter = require("./routes/order");
const menuRouter = require("./routes/menu");
const mongoose = require("mongoose");

const start = async () => {
  try {
    app.use(express.json());
    app.use(cors());
    await mongoose.connect(process.env.DB_URL);
    app.use("/order", orderRouter);
    app.use("/menu", menuRouter);

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
