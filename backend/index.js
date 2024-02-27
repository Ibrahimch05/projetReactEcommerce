require("dotenv").config();
const { dbConnect } = require("./config/config");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const initdb = require("./config/initdb");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
dbConnect();
initdb();

const routerauth = require("./routes/auth");
const categoryRouter = require("./routes/category");
const product = require("./routes/product");
const message = require("./routes/message");
const order = require("./routes/order");


app.use("/api/auth", routerauth);
app.use("/api/categories", categoryRouter);
app.use("/api/product", product);
app.use("/api/message", message);
app.use("/api/order", order);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
module.exports = app;
