angular
  .module('portfolio')
  .controller('ProjectsShowController', ProjectsShowController);

ProjectsShowController.$inject = ['$http', '$routeParams'];

function ProjectsShowController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/projects/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.project = json.data;
  });

  vm.editProject = function (project) {
    $http({
      method: 'PUT',
      url: '/api/projects/'+project._id,
      data: project
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteProject = function (project) {
    $http({
      method: 'DELETE',
      url: '/api/projects/'+ project._id
    }).then(function successCallback(json) {
      var index = vm.projects.indexOf(project);
      vm.projects.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
