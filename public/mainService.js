angular.module('app')
.service('mainService', function($http) {


  
//
  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/getProducts'
    });
  }
});
