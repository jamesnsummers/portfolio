var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

var Project = require('./project');
var Film = require('./film');

module.exports.Project = Project;
module.exports.Film = Film;
