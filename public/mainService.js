angular.module('app')
.service('mainService', function($http) {

  // getFriends() {
  //   return $http.get('/api/getProducts').then(function(response) {
  //     return response.data;
  //   })
  // }

  // this.getProducts = () => {
  //   return $http.get('http://localhost:3000/api/getProducts/')
  //     .then(function(res) {
  //       return res.data;
  //     })
  //     .catch(function(err) {
  //       console.error(err)
  //     });
  // }
// })

// this.getCards = function() {
//   return $http({
//     method:'GET',
//     url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
//   })
// }
//
  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/getProducts'
    });
  }
});
