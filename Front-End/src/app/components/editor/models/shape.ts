/**
* Rappresents a base class and is used to rappresent the base info
* for the shape on the activity diagram.
*/

export class Shape{
  private id: number;

  private succ: number;

  private succElse: number;

  private body: string;

  private printed : boolean;

  private ifPassed = new Array<number>();

  constructor(id : number, body: string, succ?: number, succElse?: number){
    this.id = id;
    this.body = body;
    if(succ)
      this.succ = succ;
    if(succElse)
      this.succElse = succElse;
  }

  setId(id : number){
    this.id = id;
  }

  setBody(body: string){
    this.body = body;
  }

  setSucc(succ: number){
    this.succ = succ;
  }

  setSuccElse(succElse: number){
    this.succElse = succElse;
  }

  setIfPassed(pas:number){
    this.ifPassed.push(pas);
  }

  setPrinted(printed: boolean){
    this.printed = printed;
  }

  getId(){
    return this.id;
  }

  getBody(){
    return this.body;
  }

  getSucc(){
      return this.succ;
  }

  getSuccElse(){
      return this.succElse;
  }

  getIfPassed(){
    return this.ifPassed;
  }

  getPrinted(){
    return this.printed;
  }

}
