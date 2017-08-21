import {Shape}  from "./shape";


export class AllShape{

  private allShap = new Array<Shape>();

  private statements = new Array<string>();

  private merges = new Array<string>();

  private code = '';

  addMerge(id: string) {
    this.merges.push(id);
  }

  addShape(shap: Shape){
    this.allShap.push(shap);
  }

  addStatement(id: string) {
    this.statements.push(id);
  }

  getAllShape(){
    return this.allShap;
  }

  getElementById(id: string) {
    let element: Shape;
    this.allShap.forEach(el => {
      if(el.getId() == id)
        element = el;
    });
    return element;
  }

  getElementByType(type: string) {
    let start: Shape;
    this.allShap.forEach(el => {
      if(el.getType() == type)
        start = el;
    });
    if(!start) 
      throw new Error('no '+type);
    return start;
  }

  getMerges() {
    return this.merges;
  }

  getStatements() {
    return this.statements;
  }

  setCode(cd: string) {
    this.code = cd;
  }

  toCode() {
    try {
      var start = this.getElementByType('Start');
      var end = this.getElementByType('End');    
    } catch (error) {
      console.log(error.message);
    }
    if(start && end) {
      start.toCode(this,'');
      console.log(this.code);
    }
  }

}
