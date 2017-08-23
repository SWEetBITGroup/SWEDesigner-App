import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../../../../../services/menu.service';
import { MainEditorService } from '../../../../../../services/main-editor.service';
import { AccountService } from '../../../../../../services/account.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  nome_progetto: string;

  constructor(private menuService: MenuService,
    private mainEditorService: MainEditorService,
    private accountService: AccountService) {
      this.nome_progetto = this.mainEditorService.getProject().getTitolo();
    }
    ngOnInit() {}

    /**
    * This function save a project into database
    */
    save(projName: string){
      this.mainEditorService.retriveGraph();
      let fileJSON = JSON.parse(this.mainEditorService.getProject().toJSON(this.accountService.username, projName));
      fileJSON.project = JSON.stringify(fileJSON.project);
      // console.log(fileJSON);
      this.nome_progetto = projName;
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

    export() {
      this.mainEditorService.retriveGraph();
      //console.log("progetto " + (this.mainEditorService.getProject().toJSON(this.accountService.username)));
      this.menuService.encrypt(JSON.parse(this.mainEditorService.getProject().toJSON(this.accountService.username, this.nome_progetto)));
    }

    import(event) {
      this.menuService.import(event);
    }

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
