import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class ifNode extends Shape{

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
      if(this.getSucc()!=0){
        console.log("if(");
        console.log(this.getBody());
        console.log("){");
        sh.printSucc(this.getSucc());
      }
      if(this.getSuccElse()!=0){
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