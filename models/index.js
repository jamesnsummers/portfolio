var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

var Project = require('./project');

module.exports.Project = Project;
