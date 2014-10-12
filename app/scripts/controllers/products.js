'use strict';

/**
 * @ngdoc function
 * @name hongjiboyuanApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the hongjiboyuanApp
 */
angular.module('hongjiboyuanApp')
  .controller('ProductsCtrl', function ($scope,$http) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$http.get("/product/product.json").success(function(data){
			$scope.products = data;
		});

  });
