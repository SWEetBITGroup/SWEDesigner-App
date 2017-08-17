import { AllShape } from './all-shape';
import { Start } from './start';
import { IfNode } from './if-node';
import { Operation } from './operation';
import { MergeNode } from './merge-node';
import { End } from './end';
import { WhileNode } from  './while-node';


var shapes = new AllShape();

var start = new Start('1');
var _if = new IfNode('2');
var op = new Operation('3');
var merge = new MergeNode('4');
var op2 = new Operation('5');
var end = new End('6');
var _while = new WhileNode('7');
var _if2 = new IfNode('8');
var _for = new WhileNode('9');
var merge2 = new MergeNode('10');
var merge3 = new MergeNode('11');

_if.setBody('true')
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