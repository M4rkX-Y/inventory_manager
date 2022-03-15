const express = require("express");
var path = require("path")
const app = express();
var mysql = require('mysql');
var rateLimit = require("express-rate-limit");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 100 requests per windowMs
});
//app.use(limiter);

var search_result={}
var ind_result={}


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());
app.use(limiter);



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

app.get("/inventory.html", (req, res) => {
  res.render("inventory");
 });

app.listen(3000, () => {
  console.log("server started on port 3000");
});


app.get('/data', function(req, res, next) {
    var sql="SELECT * FROM `7419-inventory`.items ORDER BY Item ASC";
    conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data)
  });
});


app.post('/add', function(req,res){
    console.log("Post Success");
    conn.query('INSERT INTO `7419-inventory`.items(Supplier, Item, Bin, Location, Number, Note) VALUES(?,?,?,?,?,?)', [req.body.supplier, req.body.item, req.body.bin, req.body.location, req.body.number, req.body.note], function(err)  {
      if (err) {
        return console.log(err.message);
      }
      console.log("New item has been added");
    res.send("New item has been added into the database with Name = "+req.body.item);
    res.render("inventory");
    });
});

app.post('/search', function(req,res){
  console.log("Post Success");
    conn.query("SELECT * FROM `7419-inventory`.items WHERE Item LIKE '%" +req.body.query+"%' OR Bin LIKE '%" +req.body.query+"%' OR Supplier LIKE '%" +req.body.query+"%'", function (err, search_data, fields) {
    if (err) throw err;
    search_result = search_data
    //console.log([req.body.query,search_data])
    res.render("search_inventory");
  });
});

app.get('/search_data', function(req, res, next) {
  res.json(search_result);
});

app.post('/ind_item', function(req,res){
  console.log("Post Success");
  console.log(req.body.Name)
  conn.query("SELECT * FROM `7419-inventory`.items WHERE Item LIKE '%" +req.body.Name+"%'", function (err, ind_data, fields) {
    if (err) throw err;
    ind_result = ind_data
    res.render("item");
});
});

app.get('/ind_data', function(req, res, next) {
  res.json(ind_result);
});