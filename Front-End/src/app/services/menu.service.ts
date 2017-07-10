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
              headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})})
             .subscribe((data) => {
               console.log(data);
               var blob = new Blob([data.blob()],{type: 'application/json'});
               var filename = 'proj.json';
               FileSaver.saveAs(blob,filename);
               console.log('diobueo');
              },
              error => {console.log(JSON.stringify(error));});
            }
            
  readFile(file, onloadCallBack){
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = onloadCallBack;
  }


  import(event) {
    var file = event.srcElement.files[0];
    if(file){
      this.readFile(file, (e)=>{
        var contents: any = e.target;
        var readed = JSON.parse(contents.result);
        console.log(readed);
        this.http.post('/decrypt', readed, {
          method: RequestMethod.Post,
          responseType: ResponseContentType.Json,
          headers: new Headers({'Content-Type': 'application/json'}) 
        })
        .subscribe((data)=>{
          console.log(data);
        },error => {console.log(error)})
      })
    }
    
  }
}

/*
var file = event.target.files[0];
var reader = new FileReader();
reader.onload = file =>{
  var contents: any = file.target;
  this.contentProj = contents.result;
};
console.log("madonnamaiala" + this.contentProj);
this.http.post('/decrypt', this.contentProj, {
  method: RequestMethod.Post,
  headers: new Headers({'Content-Type': 'application/json'})})
  .subscribe((data)=>{
    console.log(data);
  },
error => {console.log(error)})
}*/

/*
if(file){
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = function(e){
    var contents: any = e.target;
    readed = JSON.parse(contents.result);
  }
  reader.onerror = function(e){
    console.log("non leggo dio cane");
  }
}*/