/* CLIENT-SIDE JS */

angular
  .module('portfolio', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/films',
      controller: 'FilmsIndexController',
      controllerAs: 'filmsIndexCtrl'
    })
    .when('/films/:id', {
      templateUrl: '/templates/films-show',
      controller: 'FilmsShowController',
      controllerAs: 'filmsShowsCtrl'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
