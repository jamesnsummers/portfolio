var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/portfolio");

var Project = require('./project');

module.exports.Project = Project;
