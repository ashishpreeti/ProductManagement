    (function () {
        "use strict";
        var fn = function (a, b) {
            var args = Array.prototype.slice.call(arguments);
            console.log("args...."+ args.includes(2));
        }
        fn(1,2,3);
    }());

