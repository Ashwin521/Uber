const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
  quiet: true,
});
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
module.exports = app;
