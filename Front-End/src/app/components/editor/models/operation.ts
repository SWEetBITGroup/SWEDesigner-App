import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class operation extends Shape{

  constructor(id : string){
    super(id);
  } 

  getType() {
    return 'opearation';
  }

  toCode(sh: allShape){
    if(!(this.getPrinted())){
      this.setPrinted(true);
      console.log(this.getBody());
      console.log(";");
      if(this.getSucc())
        sh.printSucc(this.getSucc());
    }
  }
}
