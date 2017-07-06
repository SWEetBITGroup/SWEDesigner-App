import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class EditServiceService {

  private selectedGraphService = new Subject<any>();

  selectedGrapg$ = this.selectedGraphService.asObservable();
  /**
  *This method increase the size of the shapes in the editor.
  */
  zoomIn(){
    this.selectedGraphService.next('+');
  }

  /**
  *This method decrease the size of the shapes in the editor.
  */
  zoomOut(){
    this.selectedGraphService.next('-');
  }

  constructor() { }

}
