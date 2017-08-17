import { Shape } from "./shape";
import { AllShape } from './all-shape';

export class IfNode extends Shape {

  private succElse: string;

  constructor(id: string) {
    super(id);
  }

  getSuccElse() {
    return this.succElse;
  }

  setSuccElse(succElse: string) {
    this.succElse = succElse;
  }

  getType() {
    return 'IfNode';
  }

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
