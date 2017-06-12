angular
  .module('portfolio')
  .controller('ProjectsIndexController', ProjectsIndexController);

ProjectsIndexController.$inject = ['$http'];

function ProjectsIndexController ($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/projects'
  }).then(function successCallback(response) {
    vm.projects = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createProject = function () {
    $http({
      method: 'POST',
      url: '/api/projects',
      data: vm.newProject,
    }).then(function successCallback(response) {
      vm.projects.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

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
