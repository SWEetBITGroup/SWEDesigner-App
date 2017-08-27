import { AllShape } from './all-shape';

/**
* Rappresents a base class and is used to rappresent the base info
* for the shape on the activity diagram.
*/

export abstract class Shape {
  /**
  * This value rappresents the identifier to the shape
  */
  private id: string;
  /**
  * This value rappresents the next elementlinked to the shape
  */
  private succ: string;
  /**
  * This value rappresents the body of the shape
  */
  private body: string;
  /**
  * This value check if the shape is printed
  */
  private printed: boolean;
  /**
  * This value rappresents the code generate
  */
  private ifPassed = new Array<string>();
  /**
  * Make an instance of Shape
  * @param id shape's id
  */
  constructor(id: string) {
    this.id = id;
  }
  /**
  * This function change the 'id' with the new value
  * @param id shape id
  */
  setId(id: string) {
    this.id = id;
  }
  /**
  * This function change the 'body' with the new value
  * @param body shape body
  */
  setBody(body: string) {
    this.body = body;
  }
  /**
  * This function change the 'succ' with the new value
  * @param succ shape succ
  */
  setSucc(succ: string) {
    this.succ = succ;
  }
  /**
  * This function change the 'ifPassed' with the new value
  * @param ifPassed shape ifPassed
  */
  setIfPassed(pas: string[]) {
    pas.forEach(element => {
      this.ifPassed.push(element);
    });
  }
  /**
  * This function change the 'printed' with the new value
  * @param printed shape printed
  */
  setPrinted(printed: boolean) {
    this.printed = printed;
  }
  /**
  * This function return the 'id' value
  */
  getId() {
    return this.id;
  }
  /**
  * This function return the 'body' value
  */
  getBody() {
    return this.body;
  }
  /**
  * This function return the 'succ' value
  */
  getSucc() {
    return this.succ;
  }
  /**
  * This function return the 'ifPassed' value
  */
  getIfPassed() {
    return this.ifPassed;
  }
  /**
  * This function return the 'printed' value
  */
  getPrinted() {
    return this.printed;
  }
  /**
  * This function set the 'body' value with the new value
  * @param b the new body value
  */
  addBody(b: string) {
    this.body = b;
  }
  /**
  * This funtion return the type of class
  */
  abstract getType(): string;
  /**
  * This function convert the shape in code string
  * @param sh shape
  * @param code code string
  */
  abstract toCode(allShap: AllShape, code: string): void;

}
