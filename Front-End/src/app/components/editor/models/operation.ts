import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class operation extends Shape{

toCode(sh: allShape){
  if(!(this.getPrinted())){
    this.setPrinted(true);
    console.log(this.getBody());
    console.log(";");
    if(this.getSucc() != 0)
      sh.printSucc(this.getSucc());
  }
}
}
