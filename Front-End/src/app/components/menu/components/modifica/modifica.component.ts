import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { EditServiceService } from '../../../../services/edit-service.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {



  constructor(private editService: EditServiceService) {

  }

  doZoomIn(){
    this.editService.zoomIn();
  }

  doZoomOut(){
    this.editService.zoomOut();
  }

  ngOnInit() {
  }

}
