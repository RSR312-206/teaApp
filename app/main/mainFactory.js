(function() {
  'use strict';

  angular
    .module('app.main')
    .factory('TeaList', mainFactory);

  mainFactory.$inject = ['$http'];

  function mainFactory($http) {
    var TeaList = {};
    TeaList.teaArr = [];
    TeaList.getData = function() {
      $http.get('teas.json').then(function(res) {
        var teas = res.data;
        teas.forEach(function(tea) {
        TeaList.teaArr.push(tea);
        })
      });
    }
    TeaList.addTea = function(id, num) {
      var quantity =  isNaN(num) ? 1 : num;
      TeaList.teaArr.forEach(function(tea) {
        if (tea._id === id) {
          if(!tea.quantity) {
          tea.quantity = quantity;
          tea.subTotal = quantity * (tea.price/100);
          } else {
            tea.quantity += quantity;
            tea.subTotal = tea.quantity * (tea.price/100);
          }
        }
      });
    }
    TeaList.editTea = function(id, quantity) {
      TeaList.teaArr.forEach(function(tea) {
        if(tea._id === id) {
          tea.quantity = quantity;
          tea.subTotal = quantity * (tea.price / 100);
        }
      });
    };
    TeaList.deleteTea = function(id) {
      TeaList.teaArr.forEach(function(tea){
        if(tea._id === id) {
          tea.quantity = 0;
          tea.subTotal = 0;
        }
      });
    }
    TeaList.checkOut = function() {
      var finalTotal = 0;
      TeaList.teaArr.forEach(function(tea) {
        if(tea.subTotal) {
        finalTotal += tea.subTotal;
        }
      })
      return finalTotal;
    }
    TeaList.getData();
    return TeaList;
  }
})()


