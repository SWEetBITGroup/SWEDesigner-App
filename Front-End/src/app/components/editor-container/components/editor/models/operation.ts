import { Shape } from "./shape";
import { AllShape } from './all-shape';

export class Operation extends Shape {

  constructor(id: string) {
    super(id);
    this.operationType = 'Standard';
  }

  operationType : string;
  
  setOperationType(t: string) {
    this.operationType = t;
  }

  getOperationType() {
    return this.operationType;
  }

  getType() {
    return 'Operation';
  }

  toCode(sh: AllShape, code: string) {
    code += this.getBody() + ';\n';
    sh.getElementById(this.getSucc()).toCode(sh, code);
  }

}
