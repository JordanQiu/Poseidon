'use strict';

/**
 * @ngdoc function
 * @name asgardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the asgardApp
 */
var asgard = angular.module('asgard');

asgard.controller('AboutController', ['$scope',function ($scope) {
    $scope.data = {
        maxIndex : 9,
        selectedIndex : 0,
        locked : true,

        label2 : "Item 2"
    };

    $scope.next = function() {
        $scope.data.selectedIndex = Math.min( $scope.data.maxIndex, $scope.data.selectedIndex + 1) ;
    };

    $scope.previous = function() {
        $scope.data.selectedIndex = Math.max(0, ($scope.data.selectedIndex - 1));
    };
}]);
