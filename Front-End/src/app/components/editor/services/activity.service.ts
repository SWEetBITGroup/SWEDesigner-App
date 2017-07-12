import { Injectable } from '@angular/core';

import { MainEditorService } from '../../../services/main-editor.service';
import { Classe } from '../models/classe';
import { Global } from '../../../models/global';
import { Metodo } from '../models/metodo';
import { allShape } from '../models/all-shape';
import { ifNode } from '../models/if-node';
import { endIfNode } from '../models/end-if-node';
import { operation } from '../models/operation';
import { Shape } from '../models/shape';
import { Start } from '../models/start';
import { End } from '../models/end';

import * as joint from 'jointjs';


@Injectable()
export class ActivityService {

  private shapeList : allShape;

  private selectedShape: any;

  private selectedMethod: Metodo;

  private selectedElement: any;

  private startID: string;

  constructor(private mainEditorService : MainEditorService ) { }

  getShapeList(){
    return this.shapeList.getAllShape();
  }

  addIfNode(graphElement: any){
    this.shapeList.getAllShape().push(new ifNode(graphElement.id));
    this.mainEditorService.addShape(graphElement);
  }

  addEndIfNode(graphElement: any){
    this.shapeList.getAllShape().push(new endIfNode(graphElement.id));
    this.mainEditorService.addShape(graphElement);
  }

  addOperation(graphElement: any){
    this.mainEditorService.addShape(graphElement);
    let oper = new operation(graphElement.id);
    this.shapeList.getAllShape().push(oper);
  }

  addStart(graphElement: any) {
    this.startID = graphElement.id;
    this.mainEditorService.addShape(graphElement);
    this.shapeList.getAllShape().push(new Start(graphElement.id));
  }

  addEnd(graphElement: any) {
    this.mainEditorService.addShape(graphElement);
    this.shapeList.getAllShape().push(new End(graphElement.id));
  }

  setSelectedMethod(metodo: Metodo) {
    this.selectedMethod = metodo;
    this.shapeList = metodo.getShapeList();
  }

  setSelectedElement(element: any) {
    this.selectedElement = element;
  }

  selectShape(id: string) {
    this.shapeList.getAllShape().forEach(shape => {
      if(shape.getId() == id) {
        this.selectedShape = shape;
      }
    });

    if(!this.selectedShape)
      console.log('Shape mancante'); // TODO: spend a moment to code it as a real warning
  }

  start() {
    let x = false;
    if(this.startID){
      x = true;
    }
    return x;
  }

  addBody(body: string) {
    this.selectedShape.addBody(body);
  }

  getSelectedMethod() {
    return this.selectedMethod;
  }
  getSelectedElement(){
    return this.selectedElement;
  }
  getNameMethod() {
    if(this.selectedMethod)
      return this.selectedMethod.getNome();
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
    if(first.getSucc())
      first.setSuccElse(ids[1]);      
    else 
      first.setSucc(ids[1]);
    last.setIfPassed(first.getIfPassed());
    if(first.getType() == 'ifNode'){
      last.getIfPassed().push(ids[0]);
    }
    console.log(last);
  }

  modBody(text:string) {
    console.log(this.selectedElement.attributes.attrs);
    this.selectedElement.attr('text/text',text);
    let elShape = this.shapeList.getElementById(this.selectedElement.id);
    elShape.setBody(text);
    console.log(elShape);
  }

  generaCodice() {
    this.shapeList.printSucc(this.startID);
    console.log(this.shapeList);
  }
}
