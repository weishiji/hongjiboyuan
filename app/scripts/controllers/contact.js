'use strict';

/**
 * @ngdoc function
 * @name hongjiboyuanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the hongjiboyuanApp
 */
angular.module('hongjiboyuanApp')
  .controller('ContactCtrl', function ($scope) {
        // 百度地图API功能
        var map = new BMap.Map("contact-us-map");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("北京市怀柔区北房镇梨园庄202号", function(point){
            if (point) {
                map.centerAndZoom(point, 14);
                map.addOverlay(new BMap.Marker(point));
                map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
                map.disableInertialDragging()
            }
        }, "北京市怀柔区");
  });
