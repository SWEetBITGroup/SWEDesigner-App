import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ClassMenuService {

  // Observable object-class source
  private selectedClassSource = new Subject<any>();

  // Observable object-class stream
  selectedClass$ = this.selectedClassSource.asObservable();

  // Service message commands
  classSelection(classe: any) {
    this.selectedClassSource.next(classe);
  }

  constructor() { }

}
