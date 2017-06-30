// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var projectList = [];
  projectList.push({
    title: "Tic Tac Toe",
    dateCompleted: "May 7, 2017",
    url: "http://jim-jac-joe.bitballoon.com/",
    descrip: "A game of tic-tac-toe built using HTML, CSS, and Javascript.",
    image: "/images/tic-tac-toe.png"
  });
  projectList.push({
    title: "Ajaxify Reddit",
    dateCompleted: "May 12, 2017",
    url: "https://github.com/jamesnsummers/ajaxify-reddit.git",
    descrip: "An app that replicates a list of stories from Reddit, with the story image, link, and any relevant information. Users can click the story link or image to go to the actual URL of the story.",
    image: "/images/ajaxify-reddit.png"
  });
  projectList.push({
    title: "Geoquakes",
    dateCompleted: "May 14, 2017",
    url: "https://github.com/jamesnsummers/geoquakes.git",
    descrip: "An app built using jQuery's ajax() function to make calls to a third party API, Google Maps. Uses live data from the USGS (United States Geological Survey), specifically a data set showing significant earthquakes (M4.0 or greater) from the past week.",
    image: "/images/geoquakes.png"
  });
  projectList.push({
    title: "Choose Your Own Adventure",
    dateCompleted: "May 8, 2017",
    url: "https://github.com/jamesnsummers/js_adventure.git",
    descrip: "Go down the rabbit hole in this built with pure javascript",
    image: "/images/cyoa.png"
  });
  projectList.push({
    title: "TacOMG",
    dateCompleted: "June 2, 2017",
    url: "http://tacomg.herokuapp.com",
    descrip: "The TacOMG app allows users to create their ideal taco and populate a gallery of tacos. In this gallery, they can vote for their favorite tacos and see how many votes each taco has.",
    image: "/images/tacomg.png"
  });
  projectList.push({
    title: "TimeShare",
    dateCompleted: "June 23, 2017",
    url: "http://timeshare-atx.herokuapp.com",
    descrip: "An app that allows people to post content that captures meaningful moments in their lives.",
    image: "/images/timeshare.png"
  });

db.Project.remove(function(err, succ){
  db.Project.create(projectList, function(err, succ){
    if (err){ return console.log("error:", err); }
    db.Project.find(succ);
  });
});
