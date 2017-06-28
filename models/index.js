var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/portfolio");

var Project = require('./project');
var Film = require('./film');
var Director = require('./director');

module.exports.Project = Project;
module.exports.Film = Film;
module.exports.Director = Director;
