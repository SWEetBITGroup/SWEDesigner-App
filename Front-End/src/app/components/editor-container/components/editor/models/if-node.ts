import { Shape } from "./shape";
import { AllShape } from './all-shape';
/**
* This class rappresent the if statement
*/
export class IfNode extends Shape {
  /**
  * This variable refers to the else statement
  */
  private succElse: string;

  private type = 'IfNode';
  /**
  * Make an instance of IfNode
  * @param id shape's id
  */
  constructor(id: string) {
    super(id);
  }
  /**
  * This function return the 'succElse' value
  */
  getSuccElse() {
    return this.succElse;
  }
  /**
  * This function set 'succElse' with the new value
  * @param succElse new value to assign
  */
  setSuccElse(succElse: string) {
    this.succElse = succElse;
  }
  /**
  * This funtion return the type of class
  */
  getType() {
    return 'IfNode';
  }
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  toCode(sh: AllShape, code: string) {
    if (!this.getPrinted()) {
      this.setPrinted(true);
      if (this.getSucc()) {
        code += 'if( ' + this.getBody() + ' ) {\n';
        sh.addStatement(this.getId());
        sh.getElementById(this.getSucc()).toCode(sh, code);
      }
    } else {
      if (this.getSuccElse()) {
        code += 'else {\n';
        sh.getElementById(this.getSuccElse()).toCode(sh, code);
      }
      else if (sh.getMerges().length) {
        let merge = sh.getMerges().pop();
        let mergeSuccID = sh.getElementById(merge).getSucc();
        sh.getElementById(mergeSuccID).toCode(sh, code);
      }
    }
  }

}
