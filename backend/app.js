const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 4000;
const dotenv = require("dotenv");


dotenv.config({path: "./backend/config/config.env"})

// routes import
const { router } = require("./routers/User");

//middleware call
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(`/api/v1`, router);

app.use(express.static(path.resolve("./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});

// error path
app.use((req, res, next) => {
  res.status(404).json({
    error: "Sorry can't find that!",
  });
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`Your Server is Running on ${PORT}`));
