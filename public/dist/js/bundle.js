'use strict';

// var angular = require('angular'),
//     uiRouter = require('angular-ui-router')

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state('home', {
    templateUrl: './views/home.html',
    url: '/'
  }).state('products', {
    templateUrl: './views/products.html',
    url: '/products'
  });

  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
  $scope.test = "this is working";

  // mainService.getProducts().then(function(response) {
  //   $scope.products = response.data
  // });

  mainService.getCards().then(function (response) {
    console.log(response);
    $scope.cards = response.data.cards;
  });
});
'use strict';

angular.module('app').service('mainService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/getProducts'
    });
  };

  this.getCards = function () {
    return $http({
      method: 'GET',
      url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
    });
  };
});
//# sourceMappingURL=bundle.js.map
