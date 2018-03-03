var orm = require("./config/orm.js");

orm.all("burgers");

orm.select("client_name", "clients");

orm.insert("client_name", "clients");

module.exports = burger;