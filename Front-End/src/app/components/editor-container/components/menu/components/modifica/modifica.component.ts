import { Component, OnInit, AfterViewInit } from '@angular/core';


import { MenuService } from '../../../../../../services/menu.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  /**
  * Create an instantiation of ModificaComponent
  * @param menuService used to create a new instantiation of MenuService
  */
  constructor(private menuService: MenuService) {}
  /**
  * This function allow tho zoom in to the graph
  */
  doZoomIn(){
    this.menuService.zoomIn();
  }
  /**
  * This function allow tho zoom out to the graph
  */
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
  /**
  * This function allow to undo the previus move on the graph
  */
  doUndo(){
    this.menuService.undo();
  }
  /**
  * This function allow to restore the  move on the graph
  */
  doRedo(){
    this.menuService.redo();
  }
  /**
  * This function delete the selected shape on the graph
  */
  doElimina(){
    this.menuService.elimina();
  }

  ngOnInit() {
  }

}
