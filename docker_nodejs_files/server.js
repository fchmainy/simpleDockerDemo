var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render(path + "index.html", {resultsObj: process.env.HOSTNAME});
});

router.get("/*",function(req,res){
  res.sendFile(path + req.originalUrl);
});

app.use("/",router);

app.listen(8080,"0.0.0.0");
