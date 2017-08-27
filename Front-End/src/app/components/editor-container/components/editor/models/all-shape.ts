import { Shape } from "./shape";
import { IfNode } from "./if-node"

/**
* This class is the abstract of all the shapes
*/
export class AllShape {
  /**
  * This variable rappresent the array of shapes
  */
  private allShap = new Array<Shape>();
  /**
  * This variable rappresent the state of the shapes
  */
  private statements = new Array<string>();
  /**
  * This variable is the result of the merged shapes
  */
  private merges = new Array<string>();
  /**
  * This variable contain the code generate by the method
  */
  private code = '';
  /**
  * This function add the current code into the project
  * @param id it refers to the project id
  */
  addMerge(id: string) {
    this.merges.push(id);
  }
  /**
  * This function add the shape to the graph
  * @param shap selected shape
  */
  addShape(shap: Shape) {
    this.allShap.push(shap);
  }
  /**
  * This function add the statement to the decision
  * @param id statement id
  */
  addStatement(id: string) {
    this.statements.push(id);
  }
  /**
  * This function return all the shape into an array
  */
  getAllShape() {
    return this.allShap;
  }
  /**
  * This function return the refers to the selected shape
  * @param id the id of the shape
  */
  getElementById(id: string) {
    let element: Shape;
    this.allShap.forEach(el => {
      if (el.getId() == id)
        element = el;
    });
    return element;
  }
  /**
  * This function return the refers to the selected shape
  * @param type the type of the shape
  */
  getElementByType(type: string) {
    let start: Shape;
    this.allShap.forEach(el => {
      if (el.getType() == type)
        start = el;
    });
    if (!start)
      throw new Error('no ' + type);
    return start;
  }
  /**
  * This function returns the 'merges' variable
  */
  getMerges() {
    return this.merges;
  }
  /**
  * This function returns the 'statements' variable
  */
  getStatements() {
    return this.statements;
  }
  /**
  * This function set the variable 'code' with the new value
  * @param cd current code by string
  */
  setCode(cd: string) {
    this.code = cd;
  }
  /**
  * This functon remove the selected shape by id
  * @param id shape's id
  */
  removeShape(id: string) {
		let ind;
    this.allShap.forEach((e,index) => {
			if (e.getId() == id)
				ind = index;
		});
		this.allShap.splice(ind,1);
    this.allShap.forEach(el => {
      if(el.getSucc() == id) {
				el.setSucc('');
			}
			if(el.getType() == 'IfNode' && (<IfNode>el).getSuccElse() == id) {
				(<IfNode>el).setSuccElse('');
			}
		});
  }
  /**
   * This function convert the shape into code string
   */
  toCode() {
    this.allShap.forEach(e => {
      e.setPrinted(false);
    });
    try {
      var start = this.getElementByType('Start');
      var end = this.getElementByType('End');
    } catch (error) {
      console.log(error.message);
    }
    if (start && end) {
      start.toCode(this, '');
      console.log(this.code);
      return this.code;
    }
    else
      return '';
  }

}
