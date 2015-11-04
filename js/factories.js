
app.factory('TeaList', ["$http", function($http) {
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
  TeaList.getData();
  return TeaList;
}]);
