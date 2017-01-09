'use strict';

// var angular = require('angular'),
//     uiRouter = require('angular-ui-router'),
//     uiBootstrap = require('angular-ui-bootstrap');

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state('home', {
    templateUrl: './views/home.html',
    url: '/'
  }).state('products', {
    templateUrl: './views/products.html',
    url: '/products'
  }).state('about', {
    templateUrl: './views/about.html',
    url: '/about'
  });

  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
  $scope.test = "this is working";

  mainService.getProducts().then(function (response) {
    console.log("hello", response);
    $scope.products = response.data;
  });
});

// mainService.getCards().then(function(response){
//   console.log(response);
//   $scope.cards = response.data.cards
// });
'use strict';

angular.module('app').service('mainService', function ($http) {

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
  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/getProducts'
    });
  };
});
//# sourceMappingURL=bundle.js.map
