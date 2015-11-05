
app.factory('TeaList', ["$http", function($http) {
  var TeaList = {};
  TeaList.teaArr = [];
  TeaList.getData = function() {
    $http.get('teas.json').then(function(res) {
      var teas = res.data;
      console.log(teas);
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
        console.log(tea.subTotal);
        } else {
          tea.quantity += quantity;
          tea.subTotal = tea.quantity * (tea.price/100);
          console.log(tea.subTotal);
        }
      }
    });
  }
  TeaList.checkOut = function() {
    var finalTotal = 0;
    TeaList.teaArr.forEach(function(tea) {
      if(tea.subTotal) {
      finalTotal += tea.subTotal;
      console.log(tea.subTotal);
      console.log(finalTotal);
      }
    })
    return finalTotal;
  }
  TeaList.getData();
  return TeaList;
}]);

