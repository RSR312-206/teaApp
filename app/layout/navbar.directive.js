(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gsNavbar', function() {
      return {
        templateUrl: 'app/layout/navbar.html',
        restrict: 'E',
        scope: {
          navbar: "=navbarData"
        }
      }
    });
})();