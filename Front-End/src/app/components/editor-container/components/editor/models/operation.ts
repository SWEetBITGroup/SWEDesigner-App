import { Shape } from "./shape";
import { AllShape } from './all-shape';
/**
* This class rappresent the UML activity operation
*/
export class Operation extends Shape {
  /**
  * Make an instance of Operation
  * @param id shape's id
  */
  constructor(id: string) {
    super(id);
    this.operationType = 'Standard';
  }
  /**
  * This variable define the type of operation
  */
  operationType : string;
  /**
  * This function set 'operationType' with a new value
  * @param t the new value to assign
  */
  setOperationType(t: string) {
    this.operationType = t;
  }
  /**
  * This function return the 'operationType' value
  */
  getOperationType() {
    return this.operationType;
  }
  /**
  * This funtion return the type of operation
  */
  getType() {
    return 'Operation';
  }
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  toCode(sh: AllShape, code: string) {
    code += this.getBody() + ';\n';
    sh.getElementById(this.getSucc()).toCode(sh, code);
  }

}
