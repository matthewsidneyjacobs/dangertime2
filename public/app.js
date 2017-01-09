// var angular = require('angular'),
//     uiRouter = require('angular-ui-router')

angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('products', {
      templateUrl: './views/products.html',
      url: '/products'
    })

    $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('');

})
