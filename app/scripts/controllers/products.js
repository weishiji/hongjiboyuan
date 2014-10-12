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
		$http.get("/product/product.json").success(function(data){
			$scope.products = data;
            var i = 0
            for(var item in data){
                i += 1
            }
            console.log(i,"this is product count")
		});

  });
