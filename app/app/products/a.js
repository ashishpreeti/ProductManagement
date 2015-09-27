(function () {
    "use strict";
    var Tornado = function(cities,windGust,type) {
        this.cities = cities;
        this.windGust = windGust;
        this.type = type;
    };

    var cities = [["New York", 1234], ["California", 234]];
    var katrina = new Tornado(cities, '120mph', 'F12');

    console.log("Tornado "+ katrina);

    Tornado.prototype.valueOf = function () {
        var sum = 0;
        for(var i=0; i <= this.cities.length-1; i++) {
            console.log("..."+ cities);
            sum += this.cities[i][1];
        }
        return sum;
    }

    var twister = new Tornado(cities, '34mph', 'F23');
    cities.push(["London", 2000]);
    console.log("Tornado "+ katrina.valueOf());
    console.log("twister" + twister.constructor);
    console.log("twister" + twister.constructor.prototype);

}());