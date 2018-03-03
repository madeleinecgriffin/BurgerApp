// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendData = require("../models.burger.js");
var express = require("express");

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

  app.get("/", function(req, res) {
    res.render("index", {burgers: burger_name});
  });

  app.get("/api/burgers", function (req, res) {
    res.json(burgers);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/burgers", function (req, res) {

    var newBurger = req.body;

    //initialize a variable for storing the difference score for the list of possible friends
    var diffArray = [];

    //cycles through all friends on the list to determine the total difference in score between the user and each possible friend
    //stores these total differences in diffArray
    for (let i = 0; i < friendData.length; i++) {
      var element = friendData[i];

      if (element.friendName != userData.friendName) {
        var totalDiff = 0;

        for (let j = 0; j < element["friendAnswers[]"].length; j++) {
          var storeFriend = element["friendAnswers[]"][j];
          var question = j + 1;
          var storeUser = userData["friendAnswers[]"][j];
          var storeDifference = Math.abs(storeFriend - storeUser);
          totalDiff = totalDiff + storeDifference;
        }
        diffArray.push(totalDiff);
      }
    }

    //sets a min difference to go down from
    var minDiff = 40;

    //initialize a variable to store the index of the lowest difference score aka your new best friend's index
    var diffIndex;

    //cycles through the array of total differences to determine the index that has the lowest difference
    for (let i = 0; i < diffArray.length; i++) {
      const element = diffArray[i];
      if (element < minDiff) {
        minDiff = element;
        diffIndex = i;
      }
      else {
        minDiff = minDiff;
      }
    }

    //stores the name of the user's new best friend
    var friendMatch = friendData[diffIndex];

    //pushes user to list of friends so they can be compared with future users
    friendData.push(req.body);

    res.json(friendMatch);
  });
}