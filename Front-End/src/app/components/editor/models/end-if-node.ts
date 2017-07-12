import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class endIfNode extends Shape{

  constructor(id : string){
      super(id);
  }

  getType() {
      return 'endIfNode';
  }

  toCode(sh: allShape){
    if(!(this.getPrinted())){
      this.setPrinted(true);
      console.log("}");
      if(!this.getSucc())
        sh.printSucc(this.getSucc());
    }
  }
}
