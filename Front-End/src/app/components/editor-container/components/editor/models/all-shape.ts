import {Shape}  from "./shape";


export class allShape{
  private allShap = new Array<Shape>();

  public getAllShape(){
    return this.allShap;
  }

  getElementById(id: string) {
    let element;
    this.allShap.forEach(el => {
      if(el.getId() == id)
        element = el;
    });
    return element;
  }

  addShape(shap: Shape){
    this.allShap.push(shap);
  }
  //V Verifica di essere all'interno di un loop
  existMyLoop(id: string){
    this.allShap.forEach(a => {
      if(a.getSucc() == id || a.getSuccElse() == id ){
        a.getIfPassed().forEach(a1 => {
          if(a1 == id)
            return true;
        });
      }
    });
    return false;
  }
  // Stampa il nodo successivo
  printSucc(id: string){
    this.allShap.forEach(a =>{
      if(a.getId() == id){
        a.toCode(this);
      }
    });
  }

}
