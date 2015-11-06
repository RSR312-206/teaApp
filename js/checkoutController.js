var app = angular.module('teaApp');

app.controller("checkoutController", ["$scope", 'TeaList', function($scope, TeaList) {
  $scope.teas = TeaList.teaArr;
  $scope.total = function() {
      return TeaList.checkOut();
  };
  $scope.editTea = function(id, quantity) {
    TeaList.editTea(id, quantity);
  }
  $scope.deleteTea = function(id) {
    TeaList.deleteTea(id);
  };

}]);
