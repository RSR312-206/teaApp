var app = angular.module('teaApp');

app.controller('mainController', ["$scope", "TeaList", function($scope, TeaList) {
  $scope.teas = TeaList.teaArr;
  $scope.addTea = function(id, num, scope) {
      TeaList.addTea(id, parseInt(num));
    };
}]);




