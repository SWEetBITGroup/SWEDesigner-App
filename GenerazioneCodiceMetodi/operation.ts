import { Shape } from "./shape";
import { AllShape } from './all-shape';

export class Operation extends Shape {

  constructor(id: string) {
    super(id);
  }

  getType() {
    return 'Operation';
  }

  toCode(sh: AllShape, code: string) {
    code += this.getBody() + ';\n';
    sh.getElementById(this.getSucc()).toCode(sh, code);
  }

}
