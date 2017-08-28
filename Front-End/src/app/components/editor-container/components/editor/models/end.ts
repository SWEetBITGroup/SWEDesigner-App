import {Shape}  from "./shape";
import {AllShape} from './all-shape';
/**
* This class rappresent the uml end shape
*/
export class End extends Shape{
  
  private type = 'End';
  /**
  * Make an instance of End
  * @param id shape id
  */
  constructor(id : string){
    super(id);
  }
  /**
  * Return the type of the shape
  */
  getType() {
    return 'End';
  }
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  toCode(sh: AllShape, code: string){
    sh.setCode(code);
  }
}
