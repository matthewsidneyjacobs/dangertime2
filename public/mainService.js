angular.module('app')
.service('mainService', function($http) {

  // this.getProducts = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/getProducts'
  //   })
  // }


  this.getCards = function() {
    return $http({
      method:'GET',
      url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
    })
  }

})
