/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/project
function index(req, res) {
  db.Project.find({}, function(err, allProjects) {
    res.json(allProjects);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Project.create(req.body, function(err, project) {
    if (err) { console.log('error', err); }
    console.log(project);
    res.json(project);
  });
}

function show(req, res) {
  db.Project.findById(req.params.projectId, function(err, foundProject) {
    if(err) { console.log('projectsController.show error', err); }
    console.log('projectsController.show responding with', foundProject);
    res.json(foundProject);
  });
}

function destroy(req, res) {
  db.Project.findOneAndRemove({ _id: req.params.projectId }, function(err, foundProject){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundProject);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Project.findById(req.params.projectId, function(err, foundProject) {
    if(err) { console.log('albumsController.update error', err); }
    foundProject.title = req.body.title;
    foundProject.dateCompleted = req.body.dateCompleted;
    foundProject.url = req.body.url;
    foundProject.save(function(err, foundProject) {
      if(err) { console.log('saving altered project failed'); }
      res.json(foundProject);
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
