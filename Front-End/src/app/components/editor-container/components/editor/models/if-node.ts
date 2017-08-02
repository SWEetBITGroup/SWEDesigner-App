import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class ifNode extends Shape{

  constructor(id : string){
      super(id);
  }

  getType() {
      return 'ifNode';
  }

  toCode(sh: allShape){
    if(!(this.getPrinted())){
      this.setPrinted(true);
      if(sh.existMyLoop(this.getId())){
        console.log("while(");
        console.log(this.getBody());
        console.log("){");
        sh.printSucc(this.getSucc());
      }
      else{
        if(this.getSucc()){
          console.log("if(");
          console.log(this.getBody());
          console.log("){");
          sh.printSucc(this.getSucc());
        }
        if(this.getSuccElse()){
          console.log("else(");
          console.log(this.getBody());
          console.log("){");
          sh.printSucc(this.getSuccElse());
        }
      }
    }
    else{
      console.log("}");
      sh.printSucc(this.getSuccElse());
    }
  }

}
