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
var End = (function (_super) {
    __extends(End, _super);
    function End(id) {
        return _super.call(this, id) || this;
    }
    End.prototype.getType = function () {
        return 'End';
    };
    End.prototype.toCode = function (sh, code) {
        code += 'END';
        sh.setCode(code);
    };
    return End;
}(shape_1.Shape));
exports.End = End;
