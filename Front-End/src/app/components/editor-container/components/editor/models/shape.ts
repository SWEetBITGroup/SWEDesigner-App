import { AllShape } from './all-shape';

/**
* Rappresents a base class and is used to rappresent the base info
* for the shape on the activity diagram.
*/

export abstract class Shape {
  private id: string;

  private succ: string;

  private body: string;

  private printed: boolean;

  private ifPassed = new Array<string>();

  constructor(id: string) {
    this.id = id;
  }

  setId(id: string) {
    this.id = id;
  }

  setBody(body: string) {
    this.body = body;
  }

  setSucc(succ: string) {
    this.succ = succ;
  }

  setIfPassed(pas: string[]) {
    pas.forEach(element => {
      this.ifPassed.push(element);
    });
  }

  setPrinted(printed: boolean) {
    this.printed = printed;
  }

  getId() {
    return this.id;
  }

  getBody() {
    return this.body;
  }

  getSucc() {
    return this.succ;
  }

  getIfPassed() {
    return this.ifPassed;
  }

  getPrinted() {
    return this.printed;
  }

  addBody(b: string) {
    this.body = b;
  }

  abstract getType(): string;

  abstract toCode(allShap: AllShape, code: string): void;

}
