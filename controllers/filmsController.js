// Film page for future deployment
/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/films
function indexFilm(req, res) {
  db.Film.find({}, function(err, allFilms) {
    res.json(allFilms);
  });
}

function createFilm(req, res) {

  db.Film.createFilm(req.body, function(err, film) {
    if (err) { console.log('error', err); }
    res.json(film);
  });
}

function showFilm(req, res) {
  db.Film.findById(req.params.filmId, function(err, foundFilm) {
    if(err) { console.log('filmsController.showFilm error', err); }
    res.json(foundFilm);
  });
}

function destroyFilm(req, res) {
  db.Film.findOneAndRemove({ _id: req.params.filmId }, function(err, foundFilm){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundFilm);
  });
}

function updateFilm(req, res) {
  db.Film.findById(req.params.filmId, function(err, foundFilm) {
    if(err) { console.log('filmsController.updateFilm error', err); }
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
  indexFilm: indexFilm,
  createFilm: createFilm,
  showFilm: showFilm,
  destroyFilm: destroyFilm,
  updateFilm: updateFilm
};
