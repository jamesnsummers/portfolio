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
    vm.projects  = json.data;
  });

}
