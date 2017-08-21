"use strict";
exports.__esModule = true;
var AllShape = (function () {
    function AllShape() {
        this.allShap = new Array();
        this.statements = new Array();
        this.merges = new Array();
        this.code = '';
    }
    AllShape.prototype.addMerge = function (id) {
        this.merges.push(id);
    };
    AllShape.prototype.addShape = function (shap) {
        this.allShap.push(shap);
    };
    AllShape.prototype.addStatement = function (id) {
        this.statements.push(id);
    };
    AllShape.prototype.getAllShape = function () {
        return this.allShap;
    };
    AllShape.prototype.getElementById = function (id) {
        var element;
        this.allShap.forEach(function (el) {
            if (el.getId() == id)
                element = el;
        });
        return element;
    };
    AllShape.prototype.getElementByType = function (type) {
        var start;
        this.allShap.forEach(function (el) {
            if (el.getType() == type)
                start = el;
        });
        if (!start)
            throw new Error('no ' + type);
        return start;
    };
    AllShape.prototype.getMerges = function () {
        return this.merges;
    };
    AllShape.prototype.getStatements = function () {
        return this.statements;
    };
    AllShape.prototype.setCode = function (cd) {
        this.code = cd;
    };
    AllShape.prototype.toCode = function () {
        try {
            var start = this.getElementByType('Start');
            var end = this.getElementByType('End');
        }
        catch (error) {
            console.log(error.message);
        }
        if (start && end) {
            start.toCode(this, '');
            console.log(this.code);
        }
    };
    return AllShape;
}());
exports.AllShape = AllShape;
