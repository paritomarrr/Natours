const express = require("express");
const app = express();
const path = require("path");

// console.log(path.join(__dirname, "../public"));
// console.log(__dirname);
const staticPath = path.join(__dirname, "../public");
// const templatePath = path.join(__dirname, "../templates");
// console.log(templatePath);
//built in middleware
app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");
// app.set("views", templatePath);
// template engine route
app.get("", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.send("You are the mightiest");
});

// app.get("/about", (req, res) => {
//   res.send("You are the smartest person i know");
// });

app.listen(8000, () => {
  console.log("listening P");
});
