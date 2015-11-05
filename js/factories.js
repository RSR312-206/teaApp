
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
    var quantity = num;
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
  TeaList.checkOut = function() {
    var finalTotal = 0;
    TeaList.teaArr.forEach(function(tea) {
      finalTotal += tea.subTotal;
      console.log(finalTotal);
    })
    return finalTotal;
  }
  TeaList.getData();
  return TeaList;
}]);

