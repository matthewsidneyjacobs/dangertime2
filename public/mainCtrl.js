angular.module('app')
.controller('mainCtrl', function($scope, mainService) {
  $scope.test = "this is working"

  $scope.getProducts = function() {
    mainService.showProducts().then(function(response) {
      if(response.data) {
        $scope.products = response.data;
      }
    })
  }
})
