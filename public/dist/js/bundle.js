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

  $scope.getProducts = function () {
    mainService.showProducts().then(function (response) {
      if (response.data) {
        $scope.products = response.data;
      }
    });
  };
});
'use strict';

angular.module('app').service('mainService', function ($http) {
  this.showProducts = function () {
    return $http.post('api/products').then(function (response) {
      return response.data;
    });
  };
});
//# sourceMappingURL=bundle.js.map
