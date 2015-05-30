(function () {
    'use strict';
    angular.module('productManagement', [
        'ngRoute',
        'productManagement.view1',
        'productManagement.version',
        'common.services',
    ]).
        config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }]);
}());
