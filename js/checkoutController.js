var app = angular.module('teaApp');

app.controller("checkoutController", ["$scope", 'TeaList', function($scope, TeaList) {
  TeaList.getData();
  $scope.teas = TeaList.teaArr;


  $scope.total = function() {
      return TeaList.checkOut();
  };



}]);
