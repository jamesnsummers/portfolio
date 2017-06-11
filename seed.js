// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var filmList = [];
  filmList.push({
    title: "Seven",
    director: "David Fincher",
    genre: "Thriller",
    releaseDate: "September 22, 1995",
    topBilledCast: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
    image: "/public/images/seven-poster.jpeg"
  });
  filmList.push({
    title: "The Game",
    director: "David Fincher",
    genre: "Thriller",
    releaseDate: "September 12, 1997",
    topBilledCast: ["Michael Douglas", "Sean Penn"],
    image: "/public/images/the-game-poster.jpg"
  });
filmList.push({
    title: "Short Term 12",
    director: "Destin Daniel Cretton",
    genre: "Drama",
    releaseDate: "August 23, 2013",
    topBilledCast: ["Brie Larson", "John Gallagher Jr.", "Keith Stanfield"],
    image: "/public/images/short-term-12-poster.jpg"
  });
  filmList.push({
    title: "Get Out",
    director: "Jordan Peele",
    genre: "Horror",
    releaseDate: "February 24, 2017",
    topBilledCast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener", "Bradley Whitford"],
    image: "/public/images/get-out-poster.jpg"
  });

var directorList = [];
  directorList.push({
    name: "David Fincher",
    alive: true
  });
  directorList.push({
    name: "Destin Daniel Cretton",
    alive: true
  });
  directorList.push({
    name: "Jordan Peele",
    alive: true
  });

var projectList = [];
  projectList.push({
    title: "Tic Tac Toe",
    dateCompleted: "May 7, 2017",
    url: "https://github.com/jamesnsummers/tic-tac-toe.git"
  });
  projectList.push({
    title: "Ajaxify Reddit",
    dateCompleted: "May 12, 2017",
    url: "https://github.com/jamesnsummers/ajaxify-reddit.git"
  });
  projectList.push({
    title: "Geoquakes",
    dateCompleted: "May 14, 2017",
    url: "https://github.com/jamesnsummers/geoquakes.git"
  });
  projectList.push({
    title: "Choose Your Own Adventure",
    dateCompleted: "May 8, 2017",
    url: "https://github.com/jamesnsummers/js_adventure.git"
  });
  projectList.push({
    title: "TacOMG",
    dateCompleted: "June 2, 2017",
    url: "http://tacomg.herokuapp.com"
  });

db.Project.remove(function(err, succ){
  db.Project.create(projectList, function(err, succ){
    if (err){
      return console.log("error:", err);
    }
    db.Project.find(succ);
  });
});


// db.Film.remove({}, function(err, films){
//
//   db.Film.create(filmList, function(err, films){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all albums:", films);
//     console.log("created", films.length, "films");
//     process.exit();
//   });
//
// });

// db.Director.remove(function(err, succ){
//   db.Director.create(director_list, function(err, newDirector){
//     if (err){
//       return console.log("Error:", err);
//     }
//
//     db.Film.remove({}, function(err, films){
//       filmList.forEach(function (filmData) {
//         var film = new db.Film({
//           title: filmData.title,
//           genre: filmData.genre,
//           releaseDate: filmData.releaseDate,
//           topBilledCast: filmData.topBilledCast,
//           image: filmData.image
//         });
//         db.Director.findOne({name: filmData.director}, function (err, foundDirector) {
//           console.log('found director ' + foundDirector.name + ' for film ' + film.title);
//           if (err) {
//             console.log(err);
//             return;
//           }
//           film.director = foundDirector;
//           film.save(function(err, savedFilm){
//             if (err) {
//               return console.log(err);
//             }
//             console.log('saved ' + savedFilm.title + ' directed by ' + foundDirector.name);
//           });
//         });
//       });
//     });
//     return console.log(film_list);
//   });
// });
