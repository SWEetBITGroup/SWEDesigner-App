import {Shape}  from "./shape";
import {AllShape} from './all-shape';

export class MergeNode extends Shape{

  constructor(id : string){
      super(id);
  }

  getType() {
      return 'EndNode';
  }

  toCode(sh: AllShape, code: string){
    console.log(this.getId());
    let stat = sh.getStatements();
    if(stat.length) {
      sh.addMerge(this.getId());
      code += '}\n';
      console.log(sh.getStatements());
      sh.getElementById(stat.pop()).toCode(sh, code);
    }
    else {
      code += '}\n';
      sh.getElementById(this.getSucc()).toCode(sh, code);
    }
  }

}