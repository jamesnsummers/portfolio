/* CLIENT-SIDE JS */

angular
  .module('portfolio', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home',
      controller: 'ProjectsIndexController',
      controllerAs: 'projectsIndexCtrl'
    })
    .when('/projects', {
      templateUrl: '/templates/projects',
      controller: 'ProjectsIndexController',
      controllerAs: 'projectsIndexCtrl'
    })
    .when('/projects/add', {
      templateUrl: '/templates/projects-add',
      controller: 'ProjectsIndexController',
      controllerAs: 'projectsIndexCtrl'
    })
    .when('/projects/:id', {
      templateUrl: '/templates/projects-show',
      controller: 'ProjectsShowController',
      controllerAs: 'projectsShowCtrl'
    })
    .when('/films', {
      templateUrl: '/templates/films',
      controller: 'FilmsIndexController',
      controllerAs: 'filmsIndexCtrl'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
