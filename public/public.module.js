(function() {
  'use strict';

  angular.module('teaApp', [
    'ngRoute',
    'app.main',
    'app.checkout',
    'app.layout'
    ])
    .config(configModule)

    configModule.$inject = ['$routeProvider'];

    function configModule($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }
})();

//this file is a self invoking function
//angular.module includes all dependencies and files into the angular.module array
//injects the $routeProvider into the config function
//config function handes the otherwise condition of the routes.