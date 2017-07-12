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
              private activityService: ActivityService) { }

  enterClassMode() {
    this.mainEditorService.enterClassMode(this.activityService.getSelectedMethod());
  }

  modBody(text: string) {
    this.activityService.modBody(text);
  }

  generaCodice() {
    this.activityService.generaCodice();
  }

  changeName(name: string) {
    this.activityService.changeName(name);
  }

}
