/* CLIENT-SIDE JS */

angular
  .module('portfolio', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/projects',
      controller: 'ProjectsIndexController',
      controllerAs: 'projectsIndexCtrl'
    })
    .when('/projects/:id', {
      templateUrl: '/templates/projects-show',
      controller: 'ProjectsShowController',
      controllerAs: 'projectsShowCtrl'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
