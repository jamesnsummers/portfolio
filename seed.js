// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var projectList = [];
  projectList.push({
    title: "Tic Tac Toe",
    dateCompleted: "May 7, 2017",
    url: "http://jim-jac-joe.bitballoon.com/",
    descrip: "A game of tic-tac-toe built using HTML, CSS, and Javascript."
  });
  projectList.push({
    title: "Ajaxify Reddit",
    dateCompleted: "May 12, 2017",
    url: "https://github.com/jamesnsummers/ajaxify-reddit.git",
    descrip: "An app that replicates a list of stories from Reddit, with the story image, link, and any relevant information. Users can click the story link or image to go to the actual URL of the story."
  });
  projectList.push({
    title: "Geoquakes",
    dateCompleted: "May 14, 2017",
    url: "https://github.com/jamesnsummers/geoquakes.git",
    descrip: "An app built using jQuery's ajax() function to make calls to a third party API, Google Maps. Uses live data from the USGS (United States Geological Survey), specifically a data set showing significant earthquakes (M4.0 or greater) from the past week."
  });
  projectList.push({
    title: "Choose Your Own Adventure",
    dateCompleted: "May 8, 2017",
    url: "https://github.com/jamesnsummers/js_adventure.git",
    descrip: "Go down the rabbit hole in this built with pure javascript"
  });
  projectList.push({
    title: "TacOMG",
    dateCompleted: "June 2, 2017",
    url: "http://tacomg.herokuapp.com",
    descrip: "The TacOMG app allows users to create their ideal taco and populate a gallery of tacos. In this gallery, they can vote for their favorite tacos and see how many votes each taco has."
  });
  projectList.push({
    title: "TimeShare",
    dateCompleted: "June 23, 2017",
    url: "http://timeshare-atx.herokuapp.com",
    descrip: "An app that allows people to post content that captures meaningful moments in their lives."
  });

db.Project.remove(function(err, succ){
  db.Project.create(projectList, function(err, succ){
    if (err){
      return console.log("error:", err);
    }
    console.log("all projects:", projectList);
    db.Project.find(succ);
  });
});

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

db.Film.remove({}, function(err, films){

  db.Film.create(filmList, function(err, films){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", films);
    console.log("created", films.length, "films");
    process.exit();
  });

});
