import { Component, OnInit, AfterViewInit } from '@angular/core';


import { MenuService } from '../../../../../../services/menu.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {



  constructor(private menuService: MenuService) {

  }

  doZoomIn(){
    this.menuService.zoomIn();
  }

  doZoomOut(){
    this.menuService.zoomOut();
  }

  /**
  *This method starts the copy of the selected element.
  */
  doCopy(){
    this.menuService.copyElement();
  }

  /**
  *This method starts the cut of the selected element.
  */
  doCut(){
    this.menuService.cutElement();
  }

  /**
  *This method starts the paste of the selected element.
  */
  doPaste(){
    this.menuService.pasteElement();
  }

  doUndo(){
    this.menuService.undo();
  }

  ngOnInit() {
  }

}
