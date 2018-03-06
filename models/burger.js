var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insert: function(cols, vals, cb) {
      orm.insert("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(cols, cb) {
      orm.update("burgers", cols, function(res) {
        cb(res);
      });
    }
  };

module.exports = burgers;