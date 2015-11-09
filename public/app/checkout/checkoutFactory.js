(function() {
  'use strict';

  angular
    .module('app.checkout')
    .factory('TeaList', CheckoutFactory);

  CheckoutFactory.$inject = ['$http'];

  function CheckoutFactory($http) {
    var TeaList = {};
    TeaList.teaArr = [];
    $http.get('http://localhost:3001/teas').then(function(res) {
      var teas = res.data;
      teas.forEach(function(tea) {
      TeaList.teaArr.push(tea);
      })
    });
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
          $http.put('http://localhost:3001/teas/' + id, tea).success(function(data){
          console.log(data);
          console.log('success');
          console.log(tea.quantity);
          })
          .error(function(data) {
          console.log('Error: ' + data);
          });
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
    return TeaList;
  }
})();


