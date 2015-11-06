(function() {
  'use strict';

  angular
    .module('app.checkout')
    .controller('checkoutController', CheckoutController);

  CheckoutController.$inject = ['$scope', 'TeaList'];

  function CheckoutController($scope, TeaList) {
    $scope.teas = TeaList.teaArr;
    $scope.total = function() {
        return TeaList.checkOut();
    };

    $scope.editTea = function(id, quantity) {
      TeaList.editTea(id, quantity);
    };

    $scope.deleteTea = function(id) {
      TeaList.deleteTea(id);
    };
  }
})();