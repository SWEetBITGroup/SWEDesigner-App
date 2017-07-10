import { Injectable }               from '@angular/core';
import { Headers, RequestOptions, RequestMethod, ResponseContentType }  from '@angular/http';
import { Http, Response }           from '@angular/http';
import { Subject }                  from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as FileSaver from 'file-saver';

@Injectable()
export class MenuService {

  private selectedGraphService = new Subject<any>();

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
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    this.http.post('/encrypt',proj,{
              method: RequestMethod.Post,
              responseType: ResponseContentType.Blob,
              headers: new Headers({'Content-Type': 'application/json'})})
             .subscribe((data) => {
               console.log(data);
               var blob = new Blob([data.blob()],{type: 'application/json'});
               var filename = 'proj.json';
               FileSaver.saveAs(blob,filename);
               console.log('diobueo');
              },
              error => {console.log(JSON.stringify(error));});
  }

  import(event) {
    let fileList: FileList = event.target.files;
    console.log(fileList);
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        var reader = new FileReader();
        formData.append(file.name, file);
        console.log(reader.readAsText(file));
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post('/decrypt', formData, options)
            .map(res => res.json())
            .subscribe(
                data => console.log('banana'+data),
                error => console.log(error)
            )
    }
  }
}
