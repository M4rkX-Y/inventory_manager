const express = require("express");
var path = require("path")
const app = express();


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
 });

app.get("/elements.html", (req, res) => {
  res.render("elements");
 });

 
app.listen(3000, () => {
  console.log("server started on port 3000");
});
