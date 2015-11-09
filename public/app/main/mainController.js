(function(){
  'use strict';

  angular
    .module('app.main')
    .controller('mainController', MainController);

  MainController.$inject = ['$scope', 'TeaList']

  function MainController($scope, TeaList){
    $scope.teas = TeaList.teaArr;
    $scope.addTea = function(id, num, scope) {
        TeaList.addTea(id, parseInt(num));
    };
  }
})();