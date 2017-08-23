import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../../../../../../../services/account.service';
import { MainEditorService } from '../../../../../../../../../../services/main-editor.service';
import { FileComponent } from '../../../../../file/file.component';
@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.css']
})
export class ProjListComponent implements OnInit {
  arr: String[];
  constructor(private accountService: AccountService, private mainEditorService: MainEditorService) {
    this.initProj();
  }
  /**
   * This function initialize the user's project list
   */
  initProj(){
    this.arr = [];
    this.accountService.loadProjectList(this.accountService.username, (projects)=>{
      projects.forEach(element => {
        this.arr.push(element.nome_progetto);
      });
    })
  }

  /**
   * This function remove an existing project
   * @param e
   */
  removeProj(e){
    this.accountService.deleteProj(this.accountService.username, e, (err)=>{
      if(err){
        alert("Problema eliminazione progetto");
      }
      else{
        alert("Progetto eliminato con successo");
        this.initProj();
      }
    })
  }

  /**
   * This function open an existing project
   * @param e
   */
  openProj(e){
    this.accountService.loadProj(this.accountService.username, e, (project)=>{
      this.mainEditorService.loadProject(project);
      alert("Progetto cariato");
    })
  }

  ngOnInit() {

  }

}
