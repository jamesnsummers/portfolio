/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/films
function index(req, res) {
  db.Film.find({}, function(err, allFilms) {
    res.json(allFilms);
  });
}

function create(req, res) {

  db.Film.create(req.body, function(err, film) {
    if (err) { console.log('error', err); }
    res.json(film);
  });
}

function show(req, res) {
  db.Film.findById(req.params.filmId, function(err, foundFilm) {
    if(err) { console.log('filmsController.show error', err); }
    console.log('filmsController.show responding with', foundFilm);
    res.json(foundFilm);
  });
}

function destroy(req, res) {
  db.Film.findOneAndRemove({ _id: req.params.filmId }, function(err, foundFilm){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundFilm);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Film.findById(req.params.filmId, function(err, foundFilm) {
    if(err) { console.log('albumsController.update error', err); }
    foundFilm.title = req.body.title;
    foundFilm.director = req.body.director;
    foundFilm.releaseDate = req.body.releaseDate;
    foundFilm.save(function(err, foundFilm) {
      if(err) { console.log('saving altered film failed'); }
      res.json(foundFilm);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
