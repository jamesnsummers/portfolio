// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var projectList = [];
  projectList.push({
    title: "A/B Testing w/ React",
    dateCompleted: "05/15/2018",
    url: "https://github.com/jamesnsummers/ab-testing-with-react",
    descrip: "This app showcases a lightweight approach to implementing A/B tests on a React app.",
    image: "/images/ab-testing-react.png"
  });
  projectList.push({
    title: "Personal Portfolio",
    dateCompleted: "07/01/2017",
    url: "http://www.jamesnsummers.com",
    descrip: "I built this portfolio using AngularJS, HTML, CSS, Javascript, jQuery, Mongoose/MongoDB, and Express. I enjoy meta things, thus this.",
    image: "/images/JnS.png"
  });
  projectList.push({
    title: "Tic Tac Toe",
    dateCompleted: "05/07/2017",
    url: "http://jim-jac-joe.bitballoon.com/",
    descrip: "A game of tic-tac-toe built using HTML, CSS, and Javascript.",
    image: "/images/tic-tac-toe.png"
  });
  projectList.push({
    title: "Marathonr",
    dateCompleted: "07/14/2017",
    url: "https://github.com/jamesnsummers/Marathonr-App",
    descrip: "The Marathonr app builds movie marathons. Users enter their location data, pick a date, and select the movies they want to see, and Marathonr does the rest! This project was created using Python, Django, SQLite, HTML, and CSS.",
    image: "/images/countdown.gif"
  });
  projectList.push({
    title: "Geoquakes",
    dateCompleted: "05/14/2017",
    url: "https://github.com/jamesnsummers/geoquakes.git",
    descrip: "An app built using jQuery's ajax() function to make calls to a third party API, Google Maps. Uses live data from the USGS (United States Geological Survey), specifically a data set showing significant earthquakes (M4.0 or greater) from the past week.",
    image: "/images/geoquakes.png"
  });
  projectList.push({
    title: "TacOMG",
    dateCompleted: "06/02/2017",
    url: "http://tacomg.herokuapp.com",
    descrip: "The TacOMG app was built using the MEN (MongoDB, Express, Node.js) stack and Facebook Passport for auth. It allows users to create their ideal taco and populate a gallery of tacos. In this gallery, they can vote for their favorite tacos and see how many votes each taco has.",
    image: "/images/tacomg.png"
  });
  projectList.push({
    title: "TimeShare",
    dateCompleted: "06/23/2017",
    url: "http://timeshare-atx.herokuapp.com",
    descrip: "TimeShare is an app built using the MERN (MongoDB, Express, ReactJS, and Node.js) stack and Firebase for auth. It allows people to post content that captures meaningful moments in their lives.",
    image: "/images/timeshare.png"
  });
  projectList.push({
    title: "Choose Your Own Adventure",
    dateCompleted: "05/08/2017",
    url: "https://github.com/jamesnsummers/js_adventure.git",
    descrip: "Go down the rabbit hole in this game built with pure javascript",
    image: "/images/cyoa.png"
  });

db.Project.remove(function(err, succ){
  db.Project.create(projectList, function(err, succ){
    if (err){ return console.log("error:", err); }
    process.exit(0)
    // db.Project.find(succ);
  });
});
