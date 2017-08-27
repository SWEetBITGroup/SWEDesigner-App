import {Shape}  from "./shape";
import {AllShape} from './all-shape';
/**
* This class rappresent the uml start shape
*/
export class Start extends Shape{
  /**
  * Make an instance of Start
  * @param id shape id
  */
  constructor(id : string){
    super(id);
  }
  /**
  * Return the type of the shape
  */
  getType() {
    return 'Start';
  }
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  toCode(sh: AllShape, code: string){
    sh.getElementById(this.getSucc()).toCode(sh, code);
  }

}
