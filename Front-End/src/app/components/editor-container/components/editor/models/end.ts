import {Shape}  from "./shape";
import {allShape} from './all-shape';

export class End extends Shape{

  constructor(id : string){
    super(id);
  } 

  getType() {
    return 'End';
  }

  toCode(sh: allShape){
    console.log('End');
    sh.getAllShape().forEach(element => {
        element.setPrinted(false);
    });
  }
}