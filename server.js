var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});