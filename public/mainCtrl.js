angular.module('app')
.controller('mainCtrl', function($scope, mainService) {
  $scope.test = "this is working"

  mainService.getProducts().then(function(response) {
    console.log("hello", response);
    $scope.products = response.data
  });

})


// mainService.getCards().then(function(response){
//   console.log(response);
//   $scope.cards = response.data.cards
// });
