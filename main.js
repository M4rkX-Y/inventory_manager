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

 app.get("/elements.html", (req, res) => {
  res.render("elements");
 });

app.get("/add.html", (req, res) => {
  res.render("add");
 });

 app.get("/edit.html", (req, res) => {
  res.render("edit");
 });


 app.get("/item.html", (req, res) => {
  res.render("item");
 });

app.get("/inventory.html", (req, res) => {
  res.render("inventory");
 });

app.listen(3000, () => {
  console.log("server started on port 3000");
});
