import { Component, OnInit } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';

@Component({
  selector: 'app-class-list-attribute',
  templateUrl: './class-list-attribute.component.html',
  styleUrls: ['./class-list-attribute.component.css']
})
export class ClassListAttributeComponent implements OnInit {

  constructor(private classMenuService: ClassMenuService){}

  ngOnInit() {
  }

}
