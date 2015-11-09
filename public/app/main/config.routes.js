(function() {
  'use strict';

  angular
    .module('app.main')
    .config(ConfigMain);

  ConfigMain.$inject = ['$routeProvider'];

  function ConfigMain($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'mainController'
    })
  }
})();