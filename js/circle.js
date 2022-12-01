(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            let area = Math.PI * (circle.radius) ** 2; // TODO: return the proper value
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let result= 0;
            if(doRounding === true) {
                result = Math.round(circle.getArea());
            } else {
                result = circle.getArea();
                // return circle.getArea();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);

        }


    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();