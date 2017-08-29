import { Shape } from "./shape";
import { AllShape } from './all-shape';
/**
* This class implement the while statement
*/
export class WhileNode extends Shape {
  /**
  * This variable check if the for loop is required
  */
  _for = false;

  private type = 'WhileNode';
  /**
  * Make an instance of WhileNode
  * @param id shape's id
  */
  constructor(id: string) {
    super(id);
  }
  /**
  * This funtion return the type of class
  */
  getType() {
    return 'WhileNode';
  }
  /**
  * This function return the '_for' value
  */
  isFor() {
    return this._for;
  }
  /**
  * This function set the variable '_for? with the new value
  * @param s new value
  */
  setFor(s: boolean) {
    this._for = s;
  }
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  toCode(sh: AllShape, code: string) {
    if (!this.getPrinted()) {
      this.setPrinted(true);
      console.log('passo');
      sh.addStatement(this.getId());
      if (this.isFor())
        code += 'for( ' + this.getBody() + ' ) {\n';
      else
        code += 'while( ' + this.getBody() + ' ) {\n';
      sh.getElementById(this.getSucc()).toCode(sh, code);
    }
    else if (sh.getMerges().length) {
      let merge = sh.getMerges().pop();
      sh.getElementById(merge).toCode(sh, code);
    }
  }

}
