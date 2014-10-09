'use strict';

/**
 * @ngdoc overview
 * @name hongjiboyuanApp
 * @description
 * # hongjiboyuanApp
 *
 * Main module of the application.
 */
angular
    .module('hongjiboyuanApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .controller("HeaderController",function($scope, $location){
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductsCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });