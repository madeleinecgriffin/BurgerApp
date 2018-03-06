var express = require("express");
var burgers = require("../models/burger.js");
var path = require("path");

var router = express.Router();

  router.get("/", function(req, res) {
    burgers.all(function(data) {
      var burgersObj = {
        burgers: data
      };
      console.log(burgersObj);
      res.render("index", burgersObj);
    });
  });

  /*router.get("/api/burgers", function (req, res) {
    res.json(burgers);
  });*/

  router.post("/api/burgers", function (req, res) {
    burgers.insert("burger_name", req.body.name, function(result) {
    res.json({ id: result.insertId });
    });
    console.log(res.json({ id: result.insertId }));
  });


// Export routes for server.js to use.
module.exports = router;