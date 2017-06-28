angular
  .module('portfolio')
  .controller('FilmsShowController', FilmsShowController);

FilmsShowController.$inject = ['$http', '$routeParams'];

function FilmsShowController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/films/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.film = json.data;
  });

  vm.editFilm = function (film) {
    $http({
      method: 'PUT',
      url: '/api/films/'+film._id,
      data: film
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteFilm = function (film) {
    $http({
      method: 'DELETE',
      url: '/api/films/'+ film._id
    }).then(function successCallback(json) {
      var index = vm.films.indexOf(film);
      vm.films.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
