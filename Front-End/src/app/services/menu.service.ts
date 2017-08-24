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

  /**
  *This method copy the selected shapes in the editor.
  */
  copyElement(){
    this.selectedGraphService.next('copied');
  }

  /**
  *This method paste the selected shapes in the editor.
  */
  pasteElement(){
    this.selectedGraphService.next('pasted');
  }

  /**
  *This method cut the selected shapes in the editor.
  */
  cutElement(){
    this.selectedGraphService.next('cuted');
  }

  undo(){
    this.selectedGraphService.next('undo');
  }

  redo(){
    this.selectedGraphService.next('redo');
  }

  elimina(){
    this.selectedGraphService.next('elimina');
  }

  /**
   * This function request to server a save data of current project into database
   * @param proj 
   * @param cb 
   */
  saveData(proj: JSON, cb: Function){
    this.http.post('/insProject', proj, {
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        cb(false);
      }
      else{
        cb(true);
      }
    })
  }
  updateData(proj: JSON, cb: Function){
    this.http.post('/updateProj', proj, {
      method: RequestMethod.Post,
      responseType: ResponseContentType.Text
    })
    .subscribe((data)=>{
      let response = data.text();
      if(response == "true"){
        cb(false);
      }
      else{
        cb(true);
      }
    })
  }
  /**
   * This function request to server an encrypt service
   * @param proj 
   */
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
  
  /**
   * This function read an external file 
   * @param file 
   * @param onloadCallBack 
   */
  readFile(file, onloadCallBack){
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = onloadCallBack;
  }


  /**
   * This function import an external file
   * @param event 
   */
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

  //servizio di download
  /**
   * This function request to server the service of parsing and download
   */
  donwload(){
    //robo da inviare
    let j ={
      "name": "Main",
      "public" : true,
      "methodsPU": [
        {"main": "true", "corpoM": "System.out.println('H');"}
      ]
    }
    return this.http.post('\parsing', j,{
      method: RequestMethod.Post,
      responseType: ResponseContentType.Blob
    })
    .map((res)=>{
      return new Blob([res.blob()], { type: 'application/zip' })
    })
  }

  /**
   * This function call the download function
   */
  code() {
    this.donwload().subscribe(res =>{
      FileSaver.saveAs(res, "progetto.zip");
      let fileURL = URL.createObjectURL(res);
      window.open(fileURL);
    })
  }
}