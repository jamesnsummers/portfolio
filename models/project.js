var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  dateCompleted: String,
  url: String,
  descrip: String,
  image: String
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
