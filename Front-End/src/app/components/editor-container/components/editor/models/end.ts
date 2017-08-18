import {Shape}  from "./shape";
import {AllShape} from './all-shape';

export class End extends Shape{

  constructor(id : string){
    super(id);
  } 

  getType() {
    return 'End';
  }

  toCode(sh: AllShape, code: string){
    code += 'END';
    sh.setCode(code);
  }
}