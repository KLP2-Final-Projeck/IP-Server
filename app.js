const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ extended: true, limit: "10mb" }));

app.get("/", function (req, res) {
  res.send("Hellow ");
});

app.use(cors());
app.use(router);

app.listen(4003, function () {
  console.log("Server run on port 4002");
});
