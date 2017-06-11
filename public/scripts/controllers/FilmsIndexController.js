angular
  .module('portfolio')
  .controller('FilmsIndexController', FilmsIndexController);

FilmsIndexController.$inject = ['$http'];

function FilmsIndexController ($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/films'
  }).then(function successCallback(response) {
    vm.films = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createFilm = function () {
    $http({
      method: 'POST',
      url: '/api/films',
      data: vm.newFilm,
    }).then(function successCallback(response) {
      vm.films.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

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
