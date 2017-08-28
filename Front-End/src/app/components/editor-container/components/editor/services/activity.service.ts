import { Injectable } from '@angular/core';

import { MainEditorService } from '../../../../../services/main-editor.service';
import { Classe } from '../models/classe';
import { Global } from '../../../../../models/global';
import { Metodo } from '../models/metodo';
import { Param } from '../models/param';
import { AllShape } from '../models/all-shape';
import { IfNode } from '../models/if-node';
import { Operation } from '../models/operation';
import { Shape } from '../models/shape';
import { Start } from '../models/start';
import { End } from '../models/end';
import { MergeNode } from '../models/merge-node';
import { WhileNode } from '../models/while-node';


import * as joint from 'jointjs';

/**
* This class is the service that manage the activity graph
*/
@Injectable()
export class ActivityService {
  /**
  * Thiv value contain the shape list
  */
	private shapeList: AllShape;
  /**
  * This value rappresent the selected shape
  */
	private selectedShape: Shape;
  /**
  * This value rappresent the selected method
  */
	private selectedMethod: Metodo;
  /**
  * This value rappresent the selected element
  */
	private selectedElement: any;
  /**
  * This value rappresent the uml activity start shape
  */
	private startID: string;
  /**
  * This value rappresent the uml activity end shape
  */
	private endID: string;
  /**
  * This variable rappresent the list of parametres
  */
	private params: Param[];
  /**
  * This variable rappresent the list of variables
  */
	private varibles: Map<string, string>;
  /**
  * This variable rappresent a variable
  */
	private vars: string[];
		/**
  * This variable rappresent a the list of methods of the class
  */
	private methodsClass= new Array<string>();
	/**
  * This variable rappresent a the list of attributes of the class
  */	
	private attributesClass= new Array<string>();
  /**
  * Make an instance of ActivityShape
  * @param mainEditorService used to create a new instantiation of MainEditorService
  */
	constructor(private mainEditorService: MainEditorService) { }
  /**
  * This function return the 'selectedShape' value
  */
	getSelectedShapeId() {
		return this.selectedShape.getId();
	}
  /**
  * This function return the 'shapeList' value
  */
	getShapeList() {
		return this.shapeList.getAllShape();
	}
  /**
  * This function connect the logic of the if statement with grafic shape
  * @param graphElement it refers to the graph
  */
	addIfNode(graphElement: any) {
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new IfNode(graphElement.id));
	}
  /**
  * This function connect the logic of the operation with grafic shape
  * @param graphElement it refers to the graph
  */
	addOperation(graphElement: any) {
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new Operation(graphElement.id));
	}
  /**
  * This function connect the logic of the merge with grafic shape
  * @param graphElement it refers to the graph
  */
	addMergeNode(graphElement: any) {
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new MergeNode(graphElement.id));
	}
  /**
  * This function connect the logic of the loop with grafic shape
  * @param graphElement it refers to the graph
  */
	addLoopNode(id: string) {
		this.shapeList.addShape(new WhileNode(id));
	}
  /**
  * This function connect the logic of the start with grafic shape
  * @param graphElement it refers to the graph
  */
	addStart(graphElement: any) {
		//this.startID = graphElement.id;
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new Start(graphElement.id));
		this.methodsClass.forEach(element => {
			console.log(element)
		});
	}
  /**
  * This function connect the logic of the end with grafic shape
  * @param graphElement it refers to the graph
  */
	addEnd(graphElement: any) {
		//this.endID = graphElement.id;
		this.mainEditorService.addShape(graphElement);
		this.shapeList.addShape(new End(graphElement.id));
	}
  /**
  * This function connect the logic of the local variables with grafic shape
  * @param graphElement it refers to the graph
  */
	addLocalVar(id: string, name: string) {
		this.varibles.set(id, name);
		this.vars.push(name);
	}
  /**
  * This function select the method
  * @param metodo refers to the method in the graph
  */
	setSelectedMethod(metodo: Metodo) {
		this.selectedMethod = metodo;
		this.shapeList = metodo.getShapeList();
		this.varibles = metodo.getMapVars();
		this.vars = new Array<string>();
		this.varibles.forEach(val => {
			this.vars.push(val);
		});
		this.params = metodo.getListaArgomenti();
		this.params.forEach(e => {
			this.vars.push(e.getNome());
		});
	}
  /**
  * This function select the element
  * @param element refers to the element in the graph
  */
	setSelectedElement(element: any) {
		this.selectedElement = element;
		this.selectShape(element.id);
	}
  /**
  * This function select the shape
  * @param id refers to the shape in the graph
  */
	selectShape(id: string) {
		this.selectedShape = this.shapeList.getElementById(id);
		if (!this.selectedShape)
			console.log('Shape mancante'); // TODO: spend a moment to code it as a real warning
	}
  /**
  * This function return the selected shape
  */
	getSelectedShape() {
		return this.selectedShape;
	}
  /**
  * This function allow to make only one start uml shape
  */
	start() {
		let x = false;
		if (this.startID) {
			x = true;
		}
		return x;
	}
  /**
  * This function allow to make only one end uml shape
  */
	end() {
		if (this.endID) {
			return true;
		}
		return false;
	}
  /**
  * This function deselect the current shape
  */
	deselectElement() {
		this.selectedElement = null;
		this.selectedShape = null;
	}

  /**
  * This functon delete the selected element
  */
	deleteElement() {
		let id = this.selectedShape.getId();
		this.shapeList.removeShape(id);
		this.mainEditorService.removeShapeActivity(this.selectedElement);
		this.selectedElement = null;
		this.selectedShape = null;
		console.log(this.shapeList);
	}
  /**
  * This function add the body of the shape
  * @param body body content
  */
	addBody(body: string) {
		this.selectedShape.addBody(body);
		this.changeTextElement(body);
	}
  /**
  * This function return the 'selectedMethod' value
  */
	getSelectedMethod() {
		return this.selectedMethod;
	}
  /**
  * This function return the 'selectedElement' value
  */
	getSelectedElement() {
		return this.selectedElement;
	}
  /**
  * This function return the '' value
  */
	getNameMethod() {
		if (this.selectedMethod)
			return this.selectedMethod.getNome();
	}
  /**
  * This function return the 'vars' value
  */
	getVarVis() {
		return this.vars;
	}
  /**
  * This function return the shape refer
  */
	getShapeType() {
		if (this.selectedShape.getType() != 'IfNode' &&
			this.selectedShape.getType() != 'WhileNode')
			return this.selectedShape.getType();
		else {
			if (this.selectedShape.getType() == 'IfNode')
				return 'if';
			else if ((<WhileNode>this.selectedShape).isFor())
				return 'for';
			else
				return 'while';
		}
	}
  /**
  * This function return the 'params' value
  */
	getParams() {
		return this.params;
	}
  /**
  * This function change the name of the shape with the new value
  * @param name new value
  */
	changeName(name: string) {
		this.selectedMethod.changeNome(name);
	}
  /**
  * This function link the shape
  * @param elementCon element to be linked
  */
	connect(elementCon) {
		this.mainEditorService.addConnettore(elementCon);
	}
  /**
  * This function connect the shape
  * @param ids shape id
  */
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
  /**
  * This function edit the body with the new value
  * @param text new value
  * @param modText new value
  */
	modBody(text: string, modText: boolean) {
		if (modText)
			this.changeTextElement(text);
		this.selectedShape.setBody(text);
	}
  /**
  * This function check if this function have a body
  */
	hasBody() {
		if (this.selectedShape && this.selectedShape.getBody())
			return true;
		return false;
	}
  /**
  * This function return the 'body'
  */
	getBody() {
		if (this.selectedShape)
			return this.selectedShape.getBody();
		return '';
	}
  /**
  * This function generate the code
  */
	generaCodice() {
		console.log(this.shapeList.toCode());
	}
  /**
  * This function check if the shape is an uml decision shape
  */
	isDecision() {
		if (this.selectedShape) {
			if (this.selectedShape.getType() == 'IfNode' || this.selectedShape.getType() == 'WhileNode')
				return true;
		}
		return false;
	}
  /**
  * This function check if the shape is an uml operation shape
  */
	isOperation() {
		if (this.selectedShape) {
			if (this.selectedShape.getType() == 'Operation') {
				return true;
			}
		}
		return false;
	}
  /**
  * This function check if the shape is an uml variable declaration shape
  */
	isVarDeclaration() {
		if (this.selectedShape) {
			if (this.selectedShape.getType() == 'Operation' &&
				(<Operation>this.selectedShape).getOperationType() == 'VarDecl') {
				return true;
			}
		}
	}
  /**
  * This function set the new value of decision
  * @param dec new value
  * @param code new value
  */
	setDecisione(dec: string, code: string) {
		this.selectedElement.attr('text/text', dec);
		if (dec == 'if') {
			if (this.selectedShape.getType() == 'IfNode')
				this.selectedShape.addBody(code);
			else {
				let id = this.selectedShape.getId();
				let succ = this.selectedShape.getSucc();
				this.shapeList.removeShape(id);
				this.shapeList.addShape(new IfNode(id));
				this.selectedShape = this.shapeList.getElementById(id);
				if (succ)
					this.selectedShape.setSucc(succ);
				this.selectedShape.addBody(code);
			}
		}
		else {
			let id = this.selectedShape.getId();
			let succ = this.selectedShape.getSucc();
			this.shapeList.removeShape(id);
			this.addLoopNode(id);
			this.selectedShape = this.shapeList.getElementById(id);
			if (succ)
				this.selectedShape.setSucc(succ);
			if (dec == 'for')
				(<WhileNode>this.selectedShape).setFor(true);
			this.selectedShape.addBody(code);
		}
	}
  /**
  * This function set the new value of operation
  * @param opType new value
  * @param id new value
  */
	setOperationType(opType: string, id: string) {
		let op = this.shapeList.getElementById(id);
		if (op.getType() == 'Operation')
			(<Operation>op).setOperationType(opType);
	}
  /**
  * This function set the new value of variable
  * @param code new value
  */
	modVariable(code: string) {
		if (code)
			this.selectedShape.addBody(code);
	}
  /**
  * This function delete the selected variable
  * @param id id shape
  */
	deleteVar(id: string) {
		this.shapeList.removeShape(id);
		let nomeVar = this.varibles.get(id);
		let ind;
		this.vars.forEach((e, index) => {
			if (e == nomeVar)
				ind = index;
		});
		this.vars.splice(ind, 1);
		this.varibles.delete(id);
		if (this.varibles.delete(id)) {
			console.log('variabile eliminata correttamente');
		}
	}
  /**
  * This function save the method
  */
	salvaMetodo() {
		this.selectedMethod.setVars(this.varibles);
		this.mainEditorService.enterClassMode(this.selectedMethod);
	}
  /**
  * This function change the text
  * @param text new value
  */
	changeTextElement(text: string) {
		if (text.length > 18)
			this.selectedElement.attr('text/text', text.substr(0, 17) + '...');
		else
			this.selectedElement.attr('text/text', text);
	}

		setMethodsClass() {
		this.mainEditorService.getSelectedClasse().nomiMetodi.forEach(element => {
			this.methodsClass.push(element);
		});
	}

	setAttributesClass() {
		this.mainEditorService.getSelectedClasse().nomiAttributi.forEach(element => {
			this.attributesClass.push(element);
		});
	}

	resetMethodsAttributesClass(){
		if(this.methodsClass.length>0)
			this.methodsClass.splice(0, this.methodsClass.length);
		if(this.attributesClass.length>0)
			this.attributesClass.splice(0, this.attributesClass.length)
		this.setMethodsClass();
		this.setAttributesClass();
	}
}
