import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../../../../../services/menu.service';
import { MainEditorService } from '../../../../../../services/main-editor.service';
import { AccountService } from '../../../../../../services/account.service';
/**
 * This component manage the project behavior
 */
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})

export class FileComponent implements OnInit {
  /**
  * This variable save the current project name
  */
  nome_progetto: string;
  /**
  * Create an instantiation of FileComponent
  * @param accountService used to create a new instantiation of AccountService
  * @param mainEditorService used to create a new instantiation of mainEditorService
  * @param menuService used to create a new instantiation of MenuService
  */
  constructor(private menuService: MenuService,
    private mainEditorService: MainEditorService,
    private accountService: AccountService) {
      this.nome_progetto = this.mainEditorService.getProject().getTitolo();
    }
    ngOnInit() {
      this.getOpen();
    }

    /**
    * This function save a project into database
    */
    save(projName: string){
      if(this.accountService.notOpenedProj == true){
        this.mainEditorService.retriveGraph();
        let fileJSON = JSON.parse(this.mainEditorService.getProject().toJSONk(this.accountService.username, projName));
        fileJSON.project = JSON.stringify(fileJSON.project);
        // console.log(fileJSON);
        this.nome_progetto = projName;
        this.accountService.notOpenedProj = false;
        this.menuService.saveData(fileJSON, function(err){
          if(err){
            alert("Progetto non salvato");
          }
          else{
            $('#popup').hide();
            alert("Progetto salvato correttamente");
          }
        });
      }
      else{
        this.menuService.updateName(this.accountService.username, this.accountService.projName, projName, (err)=>{
          if(err){
            alert("Progetto non aggiornato");
          }
          else{
            $('#popup').hide();
            this.accountService.projName = projName;
            this.updateProj();
          }
        })
      }
    }
    /**
    * This function update an existing project
    */
    updateProj(){
      this.mainEditorService.retriveGraph();
      console.log(JSON.parse(this.mainEditorService.getProject().toJSONx(this.accountService.username, this.accountService.projName)));
      let fileJSON = JSON.parse(this.mainEditorService.getProject().toJSONx(this.accountService.username, this.accountService.projName));
      fileJSON.project = JSON.stringify(fileJSON.project);
      //this.nome_progetto = projName;
      this.menuService.updateData(fileJSON, function(err){
        if(err){
          alert("Problema aggiornamnto progetto");
        }
        else{
          alert("Progetto aggiornato con successo!");
        }
      })
    }
    /**
    * This funcion return a flag if the project is open
    */
    getOpen(){
      return this.accountService.notOpenedProj;
    }
    /**
    * This function exports the selected project
    */
    export() {
      this.mainEditorService.retriveGraph();
      console.log(JSON.parse(this.mainEditorService.getProject().toJSONx(this.accountService.username, this.accountService.projName)));
      this.menuService.encrypt(JSON.parse(this.mainEditorService.getProject().toJSONx(this.accountService.username, this.nome_progetto)));
    }
    /**
    * This function imports the project selected by the file
    * @param event This value get the file
    */
    import(event) {
      this.menuService.import(event);
    }
    /**
    * This function generate the code of the project
    */
    generate() {
      this.menuService.code();
    }

    // JQUERY Function
    openPopup() {
      $('#popup').show();
    }
    closePopup() {
      $('#popup').hide();
    }
  }
