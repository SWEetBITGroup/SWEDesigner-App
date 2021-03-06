"use strict";
exports.__esModule = true;
var all_shape_1 = require("./all-shape");
var start_1 = require("./start");
var if_node_1 = require("./if-node");
var operation_1 = require("./operation");
var merge_node_1 = require("./merge-node");
var end_1 = require("./end");
var while_node_1 = require("./while-node");
var shapes = new all_shape_1.AllShape();
var start = new start_1.Start('1');
var _if = new if_node_1.IfNode('2');
var op = new operation_1.Operation('3');
var merge = new merge_node_1.MergeNode('4');
var op2 = new operation_1.Operation('5');
var end = new end_1.End('6');
var _while = new while_node_1.WhileNode('7');
var _if2 = new if_node_1.IfNode('8');
var _for = new while_node_1.WhileNode('9');
var merge2 = new merge_node_1.MergeNode('10');
var merge3 = new merge_node_1.MergeNode('11');
_if.setBody('true');
op.setBody('system.out.printl("bubba")');
op2.setBody('system.out.printl("babbo")');
_while.setBody('true');
_if2.setBody('1 <= 2');
_for.setBody('int i=0; i <10; i++');
_for.setFor(true);
start.setSucc('2');
_if.setSucc('8');
_if.setSuccElse('7');
op.setSucc('10');
op2.setSucc('4');
merge.setSucc('6');
_while.setSucc('5');
_if2.setSucc('9');
_for.setSucc('3');
merge2.setSucc('11');
merge3.setSucc('4');
shapes.addShape(start);
shapes.addShape(_if);
shapes.addShape(op);
shapes.addShape(op2);
shapes.addShape(merge);
shapes.addShape(end);
shapes.addShape(_while);
shapes.addShape(_if2);
shapes.addShape(_for);
shapes.addShape(merge2);
shapes.addShape(merge3);
shapes.toCode();
