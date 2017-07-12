import { Component } from '@angular/core';

import { MainEditorService } from '../../../../services/main-editor.service';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'activity-menu',
  templateUrl: './activity-menu.component.html',
  styleUrls: ['./activity-menu.component.css']
})
export class ActivityMenuComponent{

  constructor(private mainEditorService : MainEditorService,
              private activityservice: ActivityService) { }

  enterClassMode() {
    this.mainEditorService.enterClassMode(this.activityservice.getSelectedMethod());
  }

}
