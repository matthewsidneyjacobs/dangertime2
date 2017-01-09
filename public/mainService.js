angular.module('app')
.service('mainService', function($http) {
  this.showProducts = function() {
    return $http.post('api/products').then(function(response) {
      return response.data
    })
  }
})
