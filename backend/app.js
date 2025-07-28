const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const connectToDb = require("./db/db");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/users", userRoutes);
module.exports = app;
