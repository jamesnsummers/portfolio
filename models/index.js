var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/portfolio");

var Film = require('./film');

module.exports.Film = Film;
