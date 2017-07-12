import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class Start extends Shape{

  constructor(id : string){
    super(id);
  } 

  getType() {
    return 'Start';
  }

  toCode(sh: allShape){
    console.log('start');
    sh.printSucc(this.getSucc());
  }
}
