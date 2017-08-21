"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var WhileNode = (function (_super) {
    __extends(WhileNode, _super);
    function WhileNode(id) {
        var _this = _super.call(this, id) || this;
        _this._for = false;
        return _this;
    }
    WhileNode.prototype.getType = function () {
        return 'WhileNode';
    };
    WhileNode.prototype.isFor = function () {
        return this._for;
    };
    WhileNode.prototype.setFor = function (s) {
        this._for = s;
    };
    WhileNode.prototype.toCode = function (sh, code) {
        if (!this.getPrinted()) {
            this.setPrinted(true);
            sh.addStatement(this.getId());
            if (this.isFor())
                code += 'for( ' + this.getBody() + ' ) {\n';
            else
                code += 'while( ' + this.getBody() + ' ) {\n';
            sh.getElementById(this.getSucc()).toCode(sh, code);
        }
        else if (sh.getMerges().length) {
            var merge = sh.getMerges().pop();
            sh.getElementById(merge).toCode(sh, code);
        }
    };
    return WhileNode;
}(shape_1.Shape));
exports.WhileNode = WhileNode;
