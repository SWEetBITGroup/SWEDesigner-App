import {Shape}  from "./shape";


export class allShape{
  private allShap = new Array<any>();

  addShape(shap: Shape){
    this.allShap.push(shap);
  }

  existMyLoop(id: number){
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

  printSucc(id: number){
    this.allShap.forEach(a =>{
      if(a.getId() == id){
        a.toCode(this);
      }
    });
  }

}
