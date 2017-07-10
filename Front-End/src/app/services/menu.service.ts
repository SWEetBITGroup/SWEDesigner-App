import { Injectable }               from '@angular/core';
import { Headers, RequestOptions }  from '@angular/http';
import { Http, Response }           from '@angular/http';
import { Subject }                  from 'rxjs/Subject';

@Injectable()
export class MenuService {

  private selectedGraphService = new Subject<any>();

  private backUrl = 'localhost:3000/encrypt';

  constructor(private http: Http) { }

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

  encrypt(proj: JSON) {
    return this.http.post(this.backUrl, proj);
  }
}
