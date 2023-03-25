const express = require("express");
const bodyParser = require("body-parser");



const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

const socials = [
  ["Discord", "5764F1"],
  ["Facebook", "0178E9"],
  ["Instagram", "E33467"],
  ["Linkedin", "0288D1"],
  ["Reddit", "ff4500"],
  ["Snapchat", "FFFC00"],
  ["Telegram", "249BD7"],
  ["Twitter", "29A8DF"],
  ["Youtube", "FF0000"],
];
app.get("/", (req, res) => {
  res.render("index", { socials: socials });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = app;
