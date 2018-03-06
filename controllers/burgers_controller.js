// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var burgerData = require("../models/burger.js");
var express = require("express");
var router = express.Router();

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  router.get("/", function(req, res) {
    console.log("Display")
    //res.render("index", {burgers: burger_name});
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
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  router.post("/api/burgers", function (req, res) {

    var newBurger = req.body;
    
    res.json(burgers);
  });*/
}