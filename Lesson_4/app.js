const express = require("express");
const router = require("./routes/index");
// const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, '/public')))
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log("server started on port", PORT));
  } catch (e) {
    console.log(e);
  }
};
start();
