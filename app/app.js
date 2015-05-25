(function () {
    'use strict';
    angular.module('productManagement', [
        'ngRoute',
        'productManagement.view1',
        'productManagement.view2',
        'productManagement.version'
    ]).
        config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }]);
}());
