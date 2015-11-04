var app = angular.module('teaApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'mainController'
  })
  .when('/checkout', {
    templateUrl: 'partials/checkout.html',
    controller: 'mainController'
  });
}])

