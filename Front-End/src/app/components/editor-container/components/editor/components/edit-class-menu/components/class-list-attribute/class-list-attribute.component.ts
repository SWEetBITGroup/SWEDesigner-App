import { Component, OnInit } from '@angular/core';

import { ClassMenuService } from '../../../../services/class-menu.service';
import { MainEditorService } from '../../../../../../../../services/main-editor.service';
import { ActivityService } from '../../../../services/activity.service'
import { Subscription } from 'rxjs/Subscription';
import { Classe } from '../../../../models/classe';

@Component({
  selector: 'app-class-list-attribute',
  templateUrl: './class-list-attribute.component.html',
  styleUrls: ['./class-list-attribute.component.css']
})
export class ClassListAttributeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
