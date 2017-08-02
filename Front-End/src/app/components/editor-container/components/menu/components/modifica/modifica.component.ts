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

  ngOnInit() {
  }

}
