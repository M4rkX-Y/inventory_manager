const express = require("express");
var path = require("path")
const app = express();


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
 });
 
app.get("/index.html", (req, res) => {
  res.render("index");
 });

app.get("/inventory.html", (req, res) => {
  res.render("inventory");
 });

app.listen(3000, () => {
  console.log("server started on port 3000");
});
