(function() {
  'use strict';

  angular
    .module('app.checkout')
    .config(ConfigCheckout);

  ConfigCheckout.$inject = ['$routeProvider'];

  function ConfigCheckout($routeProvider) {
    $routeProvider
      .when('/checkout', {
        templateUrl: 'app/checkout/checkout.html',
        controller: 'checkoutController'
      });
  }
})();