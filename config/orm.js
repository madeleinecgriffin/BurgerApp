var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      insert: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES (" + vals + ")";

        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      // An example of objColVals would be {name: panther, sleepy: true}
      update: function(table, cols, cb) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE burger_name = " + cols;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
  };

module.exports = orm;