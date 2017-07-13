import { Injectable }               from '@angular/core';
import { Headers, RequestOptions, RequestMethod, ResponseContentType }  from '@angular/http';
import { Http, Response }           from '@angular/http';
import { Subject }                  from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as FileSaver from 'file-saver';

import { MainEditorService } from './main-editor.service';

@Injectable()
export class MenuService {

  private selectedGraphService = new Subject<any>();

  private importData: any;

  constructor(private http: Http, private mainEditorService : MainEditorService) { }

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
               var blob = new Blob([data.blob()],{type: 'application/json'});
               var filename = 'proj.json';
               FileSaver.saveAs(blob,filename);
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
        this.http.post('/decrypt', readed, {
          method: RequestMethod.Post,
          responseType: ResponseContentType.Json,
          headers: new Headers({'Content-Type': 'application/json'}) 
        })
        .subscribe((data)=>{
          this.mainEditorService.importProject(data);
        },error => {console.log(error)})
      })
    }
    
  }

  getImportData() {
    return this.importData;
  }

  toCode(var1: string){
    let code = {
      m: 'for ( int i = 0 ; i < '+var1+' ; i++ ) { System.out.println( i ) ;'
    }
    return code;
  }

  code() {
    let var1 = this.mainEditorService.varCode;
    let code = 'import javafx.application.Application; import javafx.event.ActionEvent; import javafx.event.EventHandler; import javafx.scene.Scene ; import javafx.scene.control.Button ; import javafx.scene.layout.StackPane ; import javafx.stage.Stage ; class Hello{ private String text ; public int i ; protected String prova ; public static void main(String Args[]) { for ( int '+var1[0]+' = '+var1[1]+' ; '+var1[0]+' < '+var1[2]+' ; '+var1[0]+'++ ) { System.out.println( '+var1[0]+' ) ; } } }'
    let blob = new Blob([code], {type: 'text/plain'});
    var filename = 'hello.java';
    FileSaver.saveAs(blob,filename);
    let proj = this.toCode('10');
    this.http.post('/parsing',proj,{
              method: RequestMethod.Post,
              responseType: ResponseContentType.Blob,
              headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})})
             .subscribe((data) => {
               console.log('code generated')
              },
              error => {console.log(JSON.stringify(error));});
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