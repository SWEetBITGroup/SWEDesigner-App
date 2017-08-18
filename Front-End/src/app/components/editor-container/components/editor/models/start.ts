import {Shape}  from "./shape";
import {AllShape} from './all-shape';

export class Start extends Shape{

  constructor(id : string){
    super(id);
  } 

  getType() {
    return 'Start';
  }

  toCode(sh: AllShape, code: string){
    code += 'START\n';
    sh.getElementById(this.getSucc()).toCode(sh, code);
  }
  
}
