import { Injectable } from '@angular/core';

import { MainEditorService } from '../../../../../services/main-editor.service';
import { Classe } from '../models/classe';
import { Global } from '../../../../../models/global';
import { Metodo } from '../models/metodo';
import { AllShape } from '../models/all-shape';
import { IfNode } from '../models/if-node';
import { Operation } from '../models/operation';
import { Shape } from '../models/shape';
import { Start } from '../models/start';
import { End } from '../models/end';
import { MergeNode } from '../models/merge-node';


import * as joint from 'jointjs';


@Injectable()
export class ActivityService {

	private shapeList: AllShape;

	private selectedShape: Shape;

	private selectedMethod: Metodo;

	private selectedElement: any;

	private startID: string;

	private endID: string;

	private varibles: Map<string, string>;
	private vars: string[];

	constructor(private mainEditorService: MainEditorService) { }

	getSelectedShapeId() {
		return this.selectedShape.getId();
	}

	getShapeList() {
		return this.shapeList.getAllShape();
	}

	addIfNode(graphElement: any) {
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new IfNode(graphElement.id));
	}

	addOperation(graphElement: any) {
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new Operation(graphElement.id));
	}

	addMergeNode(graphElement: any) {
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new MergeNode(graphElement.id));
	}

	addStart(graphElement: any) {
		this.startID = graphElement.id;
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new Start(graphElement.id));
	}

	addEnd(graphElement: any) {
		this.endID = graphElement.id;
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new End(graphElement.id));
	}

	addLocalVar(id: string, name: string) {
		this.varibles.set(id, name);
		this.vars.push(name);
	}

	setSelectedMethod(metodo: Metodo) {
		this.selectedMethod = metodo;
		this.shapeList = metodo.getShapeList();
		this.varibles = metodo.getMapVars();
		this.vars = new Array<string>();
		this.varibles.forEach(val => {
			this.vars.push(val);
		});
	}

	setSelectedElement(element: any) {
		this.selectedElement = element;
		this.selectShape(element.id);
	}

	selectShape(id: string) {
		this.selectedShape = this.shapeList.getElementById(id);
		if (!this.selectedShape)
			console.log('Shape mancante'); // TODO: spend a moment to code it as a real warning
	}

	start() {
		let x = false;
		if (this.startID) {
			x = true;
		}
		return x;
	}

	end() {
		if (this.endID) {
			return true;
		}
		return false;
	}

	deselectElement() {
		this.selectedElement = null;
		this.selectedShape = null;
	}

	addBody(body: string) {
		this.selectedShape.addBody(body);
	}

	getSelectedMethod() {
		return this.selectedMethod;
	}
	getSelectedElement() {
		return this.selectedElement;
	}
	getNameMethod() {
		if (this.selectedMethod)
			return this.selectedMethod.getNome();
	}
	getVarVis() {
		return this.vars;
	}

	changeName(name: string) {
		this.selectedMethod.changeNome(name);
	}

	connect(elementCon) {
		this.mainEditorService.addConnettore(elementCon);
	}

	setConnector(ids: string[]) {
		let first = this.shapeList.getElementById(ids[0]);
		let last = this.shapeList.getElementById(ids[1]);
		if (first.getSucc() && first.getType() == 'IfNode')
			(<IfNode>first).setSuccElse(ids[1]);
		else
			first.setSucc(ids[1]);
		last.setIfPassed(first.getIfPassed());
		if (first.getType() == 'ifNode') {
			last.getIfPassed().push(ids[0]);
		}
		console.log(last);
	}

	modBody(text: string) {
		this.selectedElement.attr('text/text', text);
		this.selectedShape.setBody(text);
	}

	generaCodice() {
		return this.shapeList.toCode();
	}

	isDecision() {
		if (this.selectedShape) {
			if (this.selectedShape.getType() == 'IfNode')
				return true;
		}
		return false;
	}
	isOperation() {
		if (this.selectedShape) {
			if (this.selectedShape.getType() == 'Operation') {
				return true;
			}
		}
		return false;
	}

	isVarDeclaration() {
		if (this.selectedShape) {
			if (this.selectedShape.getType() == 'Operation' &&
				(<Operation>this.selectedShape).getOperationType() == 'VarDecl') {
				return true;
			}
		}
	}

	setDecisione(dec: string, code: string) {
		this.selectedElement.attr('text/text', dec);
	}

	setOperationType(opType: string, id: string) {
		let op = this.shapeList.getElementById(id);
		if (op.getType() == 'Operation')
			(<Operation>op).setOperationType(opType);
	}

	modVariable(code: string) {
		if (code)
			this.selectedShape.addBody(code);
	}

	deleteVar(id: string) {
		this.shapeList.removeShape(id);
		let nomeVar = this.varibles.get(id);
		let ind;
    this.vars.forEach((e,index) => {
			if (e == nomeVar)
				ind = index;
		});
		this.vars.splice(ind,1);
		if (this.varibles.delete(id)) {
			console.log('variabile eliminata correttamente');
		}
	}

	salvaMetodo() {
		this.selectedMethod.setVars(this.varibles);
		this.mainEditorService.enterClassMode(this.selectedMethod);
	}
}
