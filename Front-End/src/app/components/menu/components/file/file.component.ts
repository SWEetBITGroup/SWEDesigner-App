import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../../../services/menu.service';
import { MainEditorService } from '../../../../services/main-editor.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private menuService: MenuService,
              private mainEditorService: MainEditorService) { }

  ngOnInit() {
  }
  
  esporta() {
    this.mainEditorService.retriveGraph();
    this.menuService.encrypt(JSON.parse(this.mainEditorService.getProject().toJSON()));
  }

  importa(event) {
    this.menuService.import(event);
  }
}
