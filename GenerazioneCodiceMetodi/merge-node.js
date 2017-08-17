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
var MergeNode = (function (_super) {
    __extends(MergeNode, _super);
    function MergeNode(id) {
        return _super.call(this, id) || this;
    }
    MergeNode.prototype.getType = function () {
        return 'EndNode';
    };
    MergeNode.prototype.toCode = function (sh, code) {
        console.log(this.getId());
        var stat = sh.getStatements();
        if (stat.length) {
            sh.addMerge(this.getId());
            code += '}\n';
            console.log(sh.getStatements());
            sh.getElementById(stat.pop()).toCode(sh, code);
        }
        else {
            code += '}\n';
            sh.getElementById(this.getSucc()).toCode(sh, code);
        }
    };
    return MergeNode;
}(shape_1.Shape));
exports.MergeNode = MergeNode;
