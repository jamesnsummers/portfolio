var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CastSchema = new Schema({
  name: String
});

var FilmSchema = new Schema({
  title: String,
  director: String,
  genre: String,
  releaseDate: String,
  topBilledCast: [String],
  image: String
});

var Film = mongoose.model('Film', FilmSchema);

module.exports = Film;
