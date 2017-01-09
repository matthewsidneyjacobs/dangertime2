// var angular = require('angular'),
//     uiRouter = require('angular-ui-router'),
//     uiBootstrap = require('angualr-ui-bootstrap');

angular.module('app', ['ui.router', 'ui.bootstrap'])
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
    .state('about', {
      templateUrl: './views/about.html',
      url: '/about'
    })

    $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('');

})
