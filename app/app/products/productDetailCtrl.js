(function () {
    "use strict";

    angular.module("productManagement")
        .controller("productDetailCtrl", productDetailCtrl);

    function productDetailCtrl() {
        var vm = this;

        vm.product =  {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2013",
            "description": "Curved claw steel hammer",
            "cost": 1.00,
            "price": 8.99,
            "category": "toolbox",
            "tags": ["tool","garden", "kitchen"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }

        vm.title = "Product Detail: " +vm.product.productName;

        if( vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }

}());