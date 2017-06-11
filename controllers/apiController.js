function index(req, res) {
  res.json({
    message: "Welcome to James' Portfolio!",
    documentation_url: "https://github.com/jamesnsummers/portfolio/blob/master/README.md",
    base_url: "https://jamesnsummers.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
