"use strict";
exports.__esModule = true;
/**
* Rappresents a base class and is used to rappresent the base info
* for the shape on the activity diagram.
*/
var Shape = (function () {
    function Shape(id) {
        this.ifPassed = new Array();
        this.id = id;
    }
    Shape.prototype.setId = function (id) {
        this.id = id;
    };
    Shape.prototype.setBody = function (body) {
        this.body = body;
    };
    Shape.prototype.setSucc = function (succ) {
        this.succ = succ;
    };
    Shape.prototype.setIfPassed = function (pas) {
        var _this = this;
        pas.forEach(function (element) {
            _this.ifPassed.push(element);
        });
    };
    Shape.prototype.setPrinted = function (printed) {
        this.printed = printed;
    };
    Shape.prototype.getId = function () {
        return this.id;
    };
    Shape.prototype.getBody = function () {
        return this.body;
    };
    Shape.prototype.getSucc = function () {
        return this.succ;
    };
    Shape.prototype.getIfPassed = function () {
        return this.ifPassed;
    };
    Shape.prototype.getPrinted = function () {
        return this.printed;
    };
    return Shape;
}());
exports.Shape = Shape;
