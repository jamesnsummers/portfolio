var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/portfolio");

var Project = require('./project');
var Film = require('./film');

module.exports.Project = Project;
module.exports.Film = Film;
