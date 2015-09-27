(function () {
    "use strict";
    var module = angular.module("productManagement");

    var productListCtrl = function (productResource) {
        var vm = this;
        productResource.query(function(data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    };

    module.controller("productListCtrl",  ["productResource", productListCtrl]);
}());