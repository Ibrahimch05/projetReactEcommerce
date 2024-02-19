// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// //Database connection With MongoDB
// mongoose.connect(
//   "mongodb+srv://ibrahimghalbi05:wydad37@cluster0.y3vyf6j.mongodb.net/e-commerce"
// );

// //API Creation
// app.get("/", (req, res) => {
//   res.send("Express App is Running");
// });
// //Image Stroge Engine

// const Stroge = multer.diskStorage({
//   destination: "./upload/image",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({ storage: storage });

// // Creating Upload Endpoint For Images
// app.use("/images", express.static("upload/images"));
// app.post("/upload", upload.single(product), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `http://localhost:${port}/images/${req.file.filename}`,
//   });
// });

// app.listen(port, (error) => {
//   if (!error) {
//     console.log("Server Running on Port" + port);
//   } else {
//     console.log("Error: " + error);
//   }
// });

require("dotenv").config();
const { dbConnect } = require("./config/config");
const express = require("express");
const app = express();
const cookiaParser = require("cookie-parser");
const cors = require("cors");
const mongosse = require("mongoose");
// const initdb = require("./config/initdb");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiaParser());
app.use(express.static("public"));
dbConnect();
//initdb();

//const routerauth = require("./routes/auth");
//const categoryRouter = require("./routes/category");
//const product = require("./routes/product");
const message = require("./routes/message");
//const order = require("./routes/order");
//const categoryRouter = require("./routes/category");

//app.use("/api/auth", routerauth);
//app.use("/api/categories", categoryRouter);
//app.use("/api/product", product);
app.use("/api/message", message);
//app.use("/api/order", order);
//app.use("/api/categories", category);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
module.exports = app;
