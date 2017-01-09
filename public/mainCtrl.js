angular.module('app')
.controller('mainCtrl', function($scope, mainService) {
  $scope.test = "this is working"

  mainService.getProducts().then(function(response) {
    console.log("hello", response);
    $scope.products = response.data
  });

  $scope.item1cost = 10;
  $scope.item2cost = 18;
  $scope.item3cost = 25;
  $scope.item4cost = 40;
  $scope.item5cost = 80;
  $scope.item6cost = 120;
  $scope.item7cost = 160;
  $scope.item8cost = 300;

  $scope.total = 0

  $scope.add1tocart = function(val) {
    $scope.total = $scope.total + val
  }
})


// mainService.getCards().then(function(response){
//   console.log(response);
//   $scope.cards = response.data.cards
// });
