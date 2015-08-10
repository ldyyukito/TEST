var express=require("express");
var app=express();
app.use(express.static('public'));
var hbs = require("hbs");

app.set("view engine","html");

app.engine("html",hbs.__express);

app.get("/",function(req,res) {
   res.render("page");
 });

 // app.get("/");
 app.listen(3000);
