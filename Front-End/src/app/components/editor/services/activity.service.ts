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


@Injectable()
export class ActivityService {

  private project = new allShape();

  private selectedShape: any;

  private graph: JSON;

  constructor(private mainEditorService : MainEditorService ) { }

  getShapeList(){
    return this.project.getAllShape();
  }

  addIfNode(ifNod : ifNode, graphElement: any){
    this.project.getAllShape().push(ifNod);
    this.mainEditorService.addShape(graphElement);
  }

  addEndIfNode(endIf : endIfNode, graphElement: any){
    this.project.getAllShape().push(endIf);
    this.mainEditorService.addShape(graphElement);
  }

  addOperation(oper : operation, graphElement: any){
    this.project.getAllShape().push(oper);
    this.mainEditorService.addShape(graphElement);
  }


  selectShape(id: number) {
    this.project.getAllShape().forEach(shape => {
      if(shape.getId() == id) {
        this.selectedShape = shape;
      }
    });

    if(!this.selectedShape)
      console.log('Shape mancante'); // TODO: spend a moment to code it as a real warning
  }

  addBody(body: string) {
    this.selectedShape.addBody(body);
  }
}
