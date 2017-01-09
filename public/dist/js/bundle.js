'use strict';

// var angular = require('angular'),
//     uiRouter = require('angular-ui-router');


angular.module('app', []);
// .config(function( $urlRouterProvider, $locationProvider) {

// $stateProvider
// .state('home', {
//   templateUrl: './views/home.html',
//   url: '/'
// })
// .state('products', {
//   templateUrl: './views/products.html',
//   url: '/products'
// })
// .state('about', {
//   templateUrl: './views/about.html',
//   url: '/about'
// })
//
//   $urlRouterProvider.otherwise('/');
// $locationProvider.hashPrefix('');
// 
// })
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
  $scope.test = "this is working";

  mainService.getProducts().then(function (response) {
    console.log("hello", response);
    $scope.products = response.data;
  });

  $scope.item1cost = 10;
  $scope.item2cost = 18;
  $scope.item3cost = 25;
  $scope.item4cost = 40;
  $scope.item5cost = 80;
  $scope.item6cost = 120;
  $scope.item7cost = 160;
  $scope.item8cost = 300;

  $scope.total = 0;

  $scope.add1tocart = function (val) {
    $scope.total = $scope.total + val;
  };
});

// mainService.getCards().then(function(response){
//   console.log(response);
//   $scope.cards = response.data.cards
// });
'use strict';

angular.module('app').service('mainService', function ($http) {

  //
  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/getProducts'
    });
  };
});
//# sourceMappingURL=bundle.js.map
