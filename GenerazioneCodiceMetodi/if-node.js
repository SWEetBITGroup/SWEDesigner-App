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
var IfNode = (function (_super) {
    __extends(IfNode, _super);
    function IfNode(id) {
        return _super.call(this, id) || this;
    }
    IfNode.prototype.getSuccElse = function () {
        return this.succElse;
    };
    IfNode.prototype.setSuccElse = function (succElse) {
        this.succElse = succElse;
    };
    IfNode.prototype.getType = function () {
        return 'IfNode';
    };
    IfNode.prototype.toCode = function (sh, code) {
        if (!this.getPrinted()) {
            this.setPrinted(true);
            if (this.getSucc()) {
                code += 'if( ' + this.getBody() + ' ) {\n';
                sh.addStatement(this.getId());
                sh.getElementById(this.getSucc()).toCode(sh, code);
            }
        }
        else {
            if (this.getSuccElse()) {
                code += 'else {\n';
                sh.getElementById(this.getSuccElse()).toCode(sh, code);
            }
            else if (sh.getMerges().length) {
                var merge = sh.getMerges().pop();
                var mergeSuccID = sh.getElementById(merge).getSucc();
                sh.getElementById(mergeSuccID).toCode(sh, code);
            }
        }
    };
    return IfNode;
}(shape_1.Shape));
exports.IfNode = IfNode;
