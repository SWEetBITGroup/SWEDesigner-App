import {Shape}  from "./shape";
import {AllShape} from './all-shape';
/**
* This class extend the merge node
*/
export class MergeNode extends Shape{
  private type = 'MergeNode'
  /**
  * Make an instance of MergeNode
  * @param id shape's id
  */
  constructor(id : string){
    super(id);
  }
  /**
  * This funtion return the type of class
  */
  getType() {
    return 'EndNode';
  }
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  toCode(sh: AllShape, code: string){
    console.log(this.getId());
    let stat = sh.getStatements();
    console.log('Lng '+ stat.length+ 'e sono ' + stat);
    if(stat.length>1) {
      sh.addMerge(this.getId());
      code += '}\n';
      sh.getElementById(stat.pop()).toCode(sh, code);
    }
    else {
      code += '}\n';
      if (stat.length == 1)
        stat.pop();
      sh.getElementById(this.getSucc()).toCode(sh, code);
    }
  }

}
