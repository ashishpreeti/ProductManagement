'use strict';

angular.module('productManagement.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'productListCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);