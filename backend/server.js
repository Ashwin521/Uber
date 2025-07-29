const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");

const server = http.createServer(app);

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connected to db");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
