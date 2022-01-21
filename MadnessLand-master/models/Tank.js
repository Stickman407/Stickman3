"use strict";
exports.__esModule = true;
var Tank = /** @class */ (function () {
    function Tank() {
        this.el = null;
        this.x = 0;
        this.y = 0;
        this.orientation = 0;
        // Create the element and save a reference to it
        this.el = document.createElement("span");
        // Setup the styles
        this.el.style.position = "absolute";
        // Use transition to make it animate CSS style changes
        this.el.style.transition = "0.3s linear all";
        // Set the image  with a background so that I don't have to worry about sizing the tank
        this.el.style.background =
            "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat";
        this.el.style.height = "60px";
        this.el.style.width = "60px";
        // Add the element to the body as a child  <body><span /></body>
        document.body.appendChild(this.el);
    }
    Tank.prototype.move = function (x, y) {
        // Change the positioning
        this.x = this.x + x;
        this.y = this.y + y;
        // Update the HTML element styles
        this.el.style.left = "".concat(this.x, "px");
        this.el.style.top = "".concat(this.y, "px");
        return this;
    };
    Tank.prototype.setOrientation = function (degrees) {
        // Set orientation in degrees
        this.orientation = degrees;
        // Update the HTML element styles
        this.el.style.transform = "rotate(".concat(degrees, "deg)");
        return this;
    };
    return Tank;
}());
exports["default"] = Tank;
