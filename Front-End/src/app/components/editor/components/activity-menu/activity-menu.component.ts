import { Component, OnInit } from '@angular/core';

import { MainEditorService } from '../../../../services/main-editor.service';

@Component({
  selector: 'activity-menu',
  templateUrl: './activity-menu.component.html',
  styleUrls: ['./activity-menu.component.css']
})
export class ActivityMenuComponent implements OnInit {

  constructor(private mainEditorService : MainEditorService) { }

  ngOnInit() {
  }

}
