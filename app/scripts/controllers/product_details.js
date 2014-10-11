'use strict';

/**
 * @ngdoc function
 * @name hongjiboyuanApp.controller:ProductDetailsCtrl
 * @description
 * # ProductDetailsCtrl
 * Controller of the hongjiboyuanApp
 */
angular.module('hongjiboyuanApp')
    .controller('ProductDetailsCtrl', function ($scope,$resource,$routeParams) {
        $resource("/product_json/product.json")
            .get({},function(dt){
                $scope.product = dt[$routeParams.pid]
            });

        $('.product-details-nav a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    });
